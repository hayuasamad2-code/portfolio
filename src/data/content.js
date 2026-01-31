export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export const heroContent = {
    greeting: "Hi, I'm",
    name: "Hayu Abdusemed",
    role: "Computer Science Student & Aspiring Software Developer",
    description: "A final-year Computer Science student with a strong interest in software development, databases, and computer networking. Eager to apply my skills in real-world projects and continuously improve my technical knowledge.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
};

// Skills organized by category
export const skillCategories = [
    {
        category: "Programming",
        skills: [
            { name: 'C#', level: 85, icon: 'code' },
            { name: 'Object-Oriented Programming', level: 80, icon: 'code' },
            { name: 'HTML & CSS', level: 70, icon: 'layers' },
        ]
    },
    {
        category: "Database",
        skills: [
            { name: 'SQL', level: 75, icon: 'server' },
            { name: 'MySQL / SQL Server', level: 70, icon: 'server' },
        ]
    },
    {
        category: "Networking",
        skills: [
            { name: 'Computer Networking Fundamentals', level: 80, icon: 'zap' },
            { name: 'IP Addressing & Subnetting', level: 75, icon: 'zap' },
            { name: 'Network Design (Cisco Packet Tracer)', level: 78, icon: 'zap' },
        ]
    },
    {
        category: "Tools & Software",
        skills: [
            { name: 'Visual Studio', level: 85, icon: 'file-json' },
            { name: 'VS Code', level: 80, icon: 'file-json' },
            { name: 'Cisco Packet Tracer', level: 78, icon: 'palette' },
            { name: 'Microsoft Office Suite', level: 85, icon: 'palette' },
        ]
    },
    {
        category: "System Design",
        skills: [
            { name: 'Use Case Diagrams', level: 80, icon: 'palette' },
            { name: 'Sequence Diagrams', level: 75, icon: 'palette' },
            { name: 'Class Diagrams', level: 78, icon: 'palette' },
            { name: 'System Documentation', level: 82, icon: 'palette' },
        ]
    }
];

// Flat skills array for backward compatibility
export const skills = skillCategories.flatMap(cat => cat.skills);

export const softSkills = [
    "Teamwork",
    "Problem-solving",
    "Time management",
    "Communication skills"
];

export const projects = [
    {
        title: "Online-based System",
        description: "Final year project involving comprehensive system analysis, design, and implementation with full documentation.",
        tags: ["C#", "System Design", "Documentation"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
    },
    {
        title: "C# Mini Project",
        description: "Selected module from final year project demonstrating object-oriented programming principles and C# development skills.",
        tags: ["C#", "OOP", "Visual Studio"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
    },
    {
        title: "Flat Network Design",
        description: "Networking project utilizing Cisco Packet Tracer to design and simulate a complete flat network topology.",
        tags: ["Cisco Packet Tracer", "Networking", "IP Addressing"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
    },
];

export const experience = [
    {
        company: "Computer Science Program",
        role: "4th year Student",
        period: "Present",
        description: "Completing comprehensive coursework in software development, database management, computer networking, and system design with hands-on projects.",
    },
];
