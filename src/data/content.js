export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export const socialLinks = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/hayuasamad',
    facebook: 'https://facebook.com/hayu.abdusemed',
    instagram: 'https://instagram.com/hayu_asmd',
    twitter: 'https://twitter.com/hayu_asmd',
};

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
        id: 1,
        title: "Student Fee Management System",
        category: "Full-Stack Application",
        description: "A comprehensive full-stack application designed to streamline student fee management with real-time tracking, secure payment processing, and automated notifications.",
        longDescription: "Built a complete student management system featuring student registration, fee tracking, payment processing, and admin dashboard. The system provides real-time updates on payment status and generates automated notifications.",
        role: "Full Stack Developer",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Nodemailer"],
        features: [
            "Student registration and authentication",
            "Real-time fee tracking and payment status",
            "Secure payment processing",
            "Admin dashboard for fee management",
            "Automated email notifications",
            "JWT-based authentication"
        ],
        tags: ["Node.js", "Express", "React", "MongoDB", "Full-Stack"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
        liveDemo: "#",
        status: "In Development"
    },
    {
        id: 2,
        title: "Final Year Project - Online-based System",
        category: "Enterprise System",
        description: "Comprehensive final year project involving complete system analysis, design, and implementation with full technical documentation and UML diagrams.",
        longDescription: "Developed a complete online-based system as the final year capstone project, demonstrating expertise in system design, database architecture, and software engineering principles.",
        role: "Lead Developer & System Designer",
        technologies: ["C#", ".NET Framework", "SQL Server", "System Design", "UML Diagrams"],
        features: [
            "Complete system analysis and requirements gathering",
            "Database design and optimization",
            "Object-oriented architecture",
            "Comprehensive technical documentation",
            "UML use case, sequence, and class diagrams",
            "System testing and validation"
        ],
        tags: ["C#", "System Design", "SQL Server", "UML", "Documentation"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
        liveDemo: "#",
        status: "Completed"
    },
    {
        id: 3,
        title: "Network Infrastructure Design",
        category: "Networking Project",
        description: "Designed and simulated a complete flat network topology using Cisco Packet Tracer, demonstrating expertise in network design and IP addressing.",
        longDescription: "Created a comprehensive network design project showcasing skills in network topology design, IP addressing, subnetting, and network simulation.",
        role: "Network Designer",
        technologies: ["Cisco Packet Tracer", "Network Design", "IP Addressing", "Subnetting", "Network Protocols"],
        features: [
            "Flat network topology design",
            "IP addressing and subnetting configuration",
            "Network device configuration",
            "Network simulation and testing",
            "Documentation and network diagrams",
            "Troubleshooting and optimization"
        ],
        tags: ["Cisco Packet Tracer", "Networking", "IP Addressing", "Network Design"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
        liveDemo: "#",
        status: "Completed"
    },
    {
        id: 4,
        title: "C# Object-Oriented Programming Project",
        category: "Software Development",
        description: "Selected module from final year project demonstrating advanced object-oriented programming principles, design patterns, and C# development best practices.",
        longDescription: "Developed a focused C# module showcasing OOP principles including inheritance, polymorphism, encapsulation, and design patterns.",
        role: "Software Developer",
        technologies: ["C#", "Object-Oriented Programming", "Visual Studio", "Design Patterns", ".NET"],
        features: [
            "Advanced OOP principles implementation",
            "Design pattern implementation",
            "Code optimization and refactoring",
            "Unit testing",
            "Clean code practices",
            "Performance optimization"
        ],
        tags: ["C#", "OOP", "Visual Studio", "Design Patterns"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
        liveDemo: "#",
        status: "Completed"
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
