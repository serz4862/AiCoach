# AiCoach Backend

Backend API server for the AiCoach application.

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Start the development server:
```bash
npm run dev
```

4. Start the production server:
```bash
npm start
```

## API Endpoints

- `GET /` - API information
- `GET /health` - Health check endpoint

## Environment Variables

See `.env.example` for required environment variables.

## Folder Structure

```
backend/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── server.js       # Entry point
└── package.json    # Dependencies
```
