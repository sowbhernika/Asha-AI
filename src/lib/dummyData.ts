
// Bot responses
export const botResponses = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hello! I'm Asha, your AI career assistant. How can I help you today with your career journey?"
  },
  {
    keywords: ['job', 'jobs', 'career', 'careers', 'work', 'position', 'opportunity', 'opportunities'],
    response: "I can help you find job opportunities tailored to your skills and experience. Are you looking for a specific role or industry? I have access to many women-friendly employers with inclusive work environments."
  },
  {
    keywords: ['event', 'events', 'workshop', 'webinar', 'conference'],
    response: "There are several upcoming events that might interest you! From networking sessions to skill-building workshops. Would you like to see events in a specific field or format (virtual/in-person)?"
  },
  {
    keywords: ['mentor', 'mentorship', 'guidance', 'coach', 'coaching'],
    response: "Mentorship can be transformative for your career growth! I can help you explore mentorship programs tailored to your career stage and goals. Would you like to know about industry-specific mentors or general career guidance?"
  },
  {
    keywords: ['resume', 'cv', 'curriculum vitae', 'application'],
    response: "Having a strong resume is crucial! Here are some tips for creating an impactful resume: 1) Tailor it to each job application, 2) Quantify your achievements, 3) Focus on relevant experience, 4) Keep it concise, 5) Proofread thoroughly. Would you like more specific resume advice?"
  },
  {
    keywords: ['interview', 'interviewing', 'questions'],
    response: "Preparing for interviews is key to success. I recommend: 1) Researching the company thoroughly, 2) Practicing common questions, 3) Preparing your own questions to ask, 4) Using the STAR method for behavioral questions, and 5) Following up after the interview. Would you like tips for specific types of interviews?"
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'helpful'],
    response: "You're very welcome! I'm here to support your career journey. Is there anything else I can help you with today?"
  },
  {
    keywords: ['skill', 'skills', 'learn', 'learning', 'course', 'courses', 'certificate'],
    response: "Continuous learning is essential in today's fast-changing workplace! I can recommend courses, workshops, and resources to help you build new skills. Are you looking to develop technical skills, soft skills, or leadership abilities?"
  }
];

// Featured Jobs
export const featuredJobs = [
  {
    id: "job1",
    title: "Senior Marketing Manager",
    company: "TechGrowth Inc.",
    location: "Remote",
    type: "Full-time",
    description: "Lead our marketing team in developing and executing comprehensive marketing strategies to drive growth and brand awareness for our SaaS products.",
    skills: ["Marketing Strategy", "Team Leadership", "Digital Marketing", "Content Strategy", "Analytics"],
    postedDate: "2 days ago"
  },
  {
    id: "job2",
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "New York, NY",
    type: "Full-time",
    description: "Analyze complex datasets to extract actionable insights that drive business decisions. Work with cross-functional teams to improve data collection and analysis processes.",
    skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis", "Excel"],
    postedDate: "1 week ago"
  },
  {
    id: "job3",
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Chicago, IL (Hybrid)",
    type: "Full-time",
    description: "Create intuitive and engaging user experiences for web and mobile applications. Collaborate with product and engineering teams to bring designs to life.",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
    postedDate: "3 days ago"
  },
  {
    id: "job4",
    title: "Project Manager",
    company: "Global Innovations",
    location: "San Francisco, CA",
    type: "Contract",
    description: "Oversee project planning, execution, and delivery for technology implementation initiatives. Ensure projects are completed on time, within scope and budget.",
    skills: ["Project Planning", "Agile", "Stakeholder Management", "Risk Management", "Budgeting"],
    postedDate: "5 days ago"
  },
  {
    id: "job5",
    title: "Frontend Developer",
    company: "WebTech Solutions",
    location: "Remote",
    type: "Full-time",
    description: "Build responsive, accessible, and performant user interfaces using modern frontend technologies. Collaborate with designers and backend engineers to implement features.",
    skills: ["React", "TypeScript", "CSS", "Responsive Design", "Performance Optimization"],
    postedDate: "1 day ago"
  }
];

// Upcoming Events
export const upcomingEvents = [
  {
    id: "event1",
    title: "Women in Leadership Summit",
    date: "June 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    description: "Join industry leaders and experts for a day of inspiring talks, panel discussions, and networking focused on empowering women in leadership roles.",
    type: "Conference",
    speakers: [
      { name: "Sarah Johnson", role: "CEO, TechForward" },
      { name: "Michelle Lee", role: "VP of Operations, Global Enterprises" }
    ]
  },
  {
    id: "event2",
    title: "Career Transition Workshop",
    date: "July 5, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "New York City",
    description: "A practical workshop designed for women looking to pivot careers or return to the workforce after a break. Learn strategies for highlighting transferable skills and navigating the job market.",
    type: "Workshop",
    speakers: [
      { name: "Jennifer Smith", role: "Career Coach" }
    ]
  },
  {
    id: "event3",
    title: "Negotiation Skills Masterclass",
    date: "July 12, 2025",
    time: "11:00 AM - 1:30 PM",
    location: "Virtual",
    description: "Learn effective negotiation techniques specifically tailored for women in the workplace. Topics include salary negotiations, benefits, and career advancement conversations.",
    type: "Masterclass",
    speakers: [
      { name: "Dr. Rebecca Chen", role: "Author, The Art of Negotiation" }
    ]
  }
];

// Featured Mentorship Programs
export const featuredMentorshipPrograms = [
  {
    id: "mentorship1",
    title: "Women in Tech Mentorship",
    organization: "TechForward Foundation",
    duration: "6 months",
    category: "Technology",
    description: "Connect with experienced women in technology roles for personalized guidance, career advice, and support in navigating the tech industry.",
    mentorCount: 45,
    levelLabel: "All Levels"
  },
  {
    id: "mentorship2",
    title: "Executive Leadership Program",
    organization: "Women Leaders Alliance",
    duration: "12 months",
    category: "Leadership",
    description: "A comprehensive mentorship program designed for women in mid-career roles looking to advance to executive positions. Includes one-on-one mentoring, workshops, and networking events.",
    mentorCount: 30,
    levelLabel: "Mid to Senior"
  },
  {
    id: "mentorship3",
    title: "Career Returners Mentorship",
    organization: "Back to Work Initiative",
    duration: "4 months",
    category: "Career Transition",
    description: "Tailored support for women returning to the workforce after a career break. Develop strategies to showcase your skills, update your knowledge, and navigate the job market with confidence.",
    mentorCount: 25,
    levelLabel: "Returners"
  }
];

// Featured Resources
export const featuredResources = [
  {
    id: "resource1",
    title: "The Complete Guide to Salary Negotiation",
    type: "Guide",
    category: "Career Growth",
    description: "A comprehensive resource with scripts, strategies, and research methods to help you negotiate your worth confidently.",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "resource2",
    title: "Developing an Executive Presence",
    type: "Webinar",
    category: "Leadership",
    description: "Learn how to command a room, communicate effectively, and build the confidence needed for leadership roles.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "resource3",
    title: "Tech Skills Roadmap 2025",
    type: "Toolkit",
    category: "Skill Development",
    description: "An interactive guide to the most in-demand technical skills with learning resources and career path suggestions.",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500"
  }
];
