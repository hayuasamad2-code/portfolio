import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// In-memory storage (replace with MongoDB in production)
let students = [];
let payments = [];

// Helper: Generate JWT token
const generateToken = (studentId) => {
    return jwt.sign({ studentId }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
};

// Middleware: Verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.studentId = decoded.studentId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Register student
router.post('/register', async (req, res) => {
    try {
        const { name, email, studentId, password, totalFee } = req.body;

        if (!name || !email || !studentId || !password) {
            return res.status(400).json({ error: 'All fields required' });
        }

        // Check if student exists
        if (students.find(s => s.email === email)) {
            return res.status(400).json({ error: 'Student already exists' });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const newStudent = {
            id: Date.now().toString(),
            name,
            email,
            studentId,
            password: hashedPassword,
            totalFee: totalFee || 5000,
            paidFee: 0,
            createdAt: new Date()
        };

        students.push(newStudent);
        const token = generateToken(newStudent.id);

        res.status(201).json({
            success: true,
            token,
            student: { id: newStudent.id, name, email, studentId }
        });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

// Login student
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const student = students.find(s => s.email === email);
        if (!student) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isValid = await bcryptjs.compare(password, student.password);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(student.id);
        res.json({
            success: true,
            token,
            student: { id: student.id, name: student.name, email: student.email }
        });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// Get student dashboard
router.get('/dashboard', verifyToken, (req, res) => {
    const student = students.find(s => s.id === req.studentId);
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    const studentPayments = payments.filter(p => p.studentId === req.studentId);
    res.json({
        student: {
            name: student.name,
            email: student.email,
            studentId: student.studentId,
            totalFee: student.totalFee,
            paidFee: student.paidFee,
            remainingFee: student.totalFee - student.paidFee
        },
        payments: studentPayments
    });
});

// Record payment
router.post('/payment', verifyToken, (req, res) => {
    try {
        const { amount, method } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }

        const student = students.find(s => s.id === req.studentId);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        if (student.paidFee + amount > student.totalFee) {
            return res.status(400).json({ error: 'Payment exceeds total fee' });
        }

        const payment = {
            id: Date.now().toString(),
            studentId: req.studentId,
            amount,
            method: method || 'bank_transfer',
            status: 'completed',
            date: new Date()
        };

        student.paidFee += amount;
        payments.push(payment);

        res.status(201).json({
            success: true,
            payment,
            remainingFee: student.totalFee - student.paidFee
        });
    } catch (error) {
        res.status(500).json({ error: 'Payment processing failed' });
    }
});

// Get all students (admin endpoint)
router.get('/admin/students', (req, res) => {
    const studentList = students.map(s => ({
        id: s.id,
        name: s.name,
        email: s.email,
        studentId: s.studentId,
        totalFee: s.totalFee,
        paidFee: s.paidFee,
        remainingFee: s.totalFee - s.paidFee
    }));
    res.json(studentList);
});

export default router;
