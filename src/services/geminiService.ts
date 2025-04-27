export const GEMINI_API_KEY = "AIzaSyAEEFhVDNySKHOoyWhRILW_gMdATJOiHlM";

interface GeminiMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: { text: string }[];
      role: string;
    };
    finishReason: string;
  }[];
}

const systemPrompt = `You are Asha AI, a professional career assistant focused on helping women advance in their careers.
Your purpose is to provide guidance, information, and support related to:
- Job opportunities and career paths for women
- Professional development and skill-building resources
- Networking and mentorship programs 
- Industry events and conferences
- Resume and interview advice
- Work-life balance strategies

Keep your responses helpful, encouraging, and focused on career growth. 
Provide specific, actionable advice when possible. 
Be empathetic but professional. When you don't know something, acknowledge it and suggest where the user might find that information.
Always maintain a positive and empowering tone that encourages women's professional advancement.`;

export const generateGeminiResponse = async (
  messages: { text: string; sender: 'user' | 'bot' }[]
): Promise<string> => {
  try {
    // Format messages for Gemini API
    const formattedMessages: GeminiMessage[] = [];
    
    // Add system prompt as first user message (workaround for Gemini API)
    formattedMessages.push({
      role: 'user',
      parts: [{ text: systemPrompt }]
    });
    
    // Add model response to acknowledge system prompt
    formattedMessages.push({
      role: 'model',
      parts: [{ text: 'I understand my role as Asha AI. How can I help you today?' }]
    });
    
    // Add conversation messages
    messages.forEach(message => {
      formattedMessages.push({
        role: message.sender === 'user' ? 'user' : 'model',
        parts: [{ text: message.text }]
      });
    });

    // Use Gemini 1.5 Pro model endpoint (v1beta)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: formattedMessages.slice(-5), // Only send last 5 messages for speed
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 256, // Reduce for faster response
          },
        }),
      }
    );

    // Check for HTTP errors
    if (!response.ok) {
      const errorText = await response.text();
      console.error('HTTP error from Gemini API:', response.status, errorText);
      return `I'm sorry, there was an error connecting to Gemini AI (HTTP ${response.status}). Please try again later.`;
    }

    const data = await response.json() as GeminiResponse | { error?: any };

    // Check for Gemini API error field
    if ('error' in data && data.error) {
      console.error('Gemini API error:', data.error);
      return `I'm sorry, there was an error from Gemini AI: ${data.error.message || 'Unknown error.'}`;
    }

    if (!('candidates' in data) || !data.candidates || data.candidates.length === 0) {
      console.error('No response generated', data);
      return "I'm sorry, I couldn't generate a response at the moment. Please try again.";
    }

    // Post-process: Remove Markdown bullets for readability
    let text = data.candidates[0].content.parts[0].text;
    text = text
      .split('\n')
      .map(line => line.replace(/^\s*([*-]|\d+\.|•)\s+/, '').trimEnd())
      .join('\n')
      .replace(/\n{2,}/g, '\n\n'); // Keep paragraph spacing

    return text;
  } catch (error) {
    console.error('Error generating Gemini response:', error);
    return "I'm sorry, there was an error processing your request. Please try again later.";
  }
};
