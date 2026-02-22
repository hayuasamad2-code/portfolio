# Portfolio Backend

Node.js/Express backend for portfolio with contact form, project management, and student fee system.

## Features

- **Contact Form**: Email submissions with automatic replies
- **Project Management**: API to manage portfolio projects
- **Student Fee System**: Full authentication and payment tracking
- **JWT Authentication**: Secure token-based auth
- **CORS Enabled**: Works with frontend on different ports

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Configure your `.env`:
```
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173
```

### Email Setup (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in `EMAIL_PASS`

## Running

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server runs on `http://localhost:5000`

## API Endpoints

### Contact Form
- `POST /api/contact/submit` - Submit contact form

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Add new project

### Student Fee System
- `POST /api/student-fee/register` - Register student
- `POST /api/student-fee/login` - Login student
- `GET /api/student-fee/dashboard` - Get student dashboard (requires auth)
- `POST /api/student-fee/payment` - Record payment (requires auth)
- `GET /api/student-fee/admin/students` - Get all students

## Database

Currently uses in-memory storage. For production, integrate MongoDB:

```bash
npm install mongoose
```

Then update routes to use MongoDB models instead of arrays.

## Deployment

Deploy to Vercel, Heroku, or Railway:

```bash
# Vercel
vercel deploy

# Heroku
heroku create your-app-name
git push heroku main
```

Update `FRONTEND_URL` in production environment variables.
