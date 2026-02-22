import express from 'express';

const router = express.Router();

// In-memory storage (replace with database in production)
let projects = [
    {
        id: 1,
        title: "Online-based System",
        description: "Final year project involving comprehensive system analysis, design, and implementation with full documentation.",
        tags: ["C#", "System Design", "Documentation"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
    },
    {
        id: 2,
        title: "C# Mini Project",
        description: "Selected module from final year project demonstrating object-oriented programming principles and C# development skills.",
        tags: ["C#", "OOP", "Visual Studio"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
    },
    {
        id: 3,
        title: "Flat Network Design",
        description: "Networking project utilizing Cisco Packet Tracer to design and simulate a complete flat network topology.",
        tags: ["Cisco Packet Tracer", "Networking", "IP Addressing"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        link: "#",
        github: "#",
    },
    {
        id: 4,
        title: "Student Fee Management System",
        description: "Full-stack application for managing student fees with real-time tracking, payment processing, and automated notifications.",
        tags: ["Node.js", "Express", "React", "MongoDB"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
        link: "https://student-fee-system.vercel.app",
        github: "https://github.com/yourusername/student-fee-system",
    }
];

// Get all projects
router.get('/', (req, res) => {
    res.json(projects);
});

// Get single project
router.get('/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
});

// Add new project (admin only in production)
router.post('/', (req, res) => {
    const { title, description, tags, image, link, github } = req.body;
    
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description required' });
    }

    const newProject = {
        id: Math.max(...projects.map(p => p.id), 0) + 1,
        title,
        description,
        tags: tags || [],
        image: image || '',
        link: link || '#',
        github: github || '#'
    };

    projects.push(newProject);
    res.status(201).json(newProject);
});

export default router;
