# AiCoach Admin Dashboard

Admin dashboard for managing the AiCoach application.

## Tech Stack

- React 18
- Vite
- Axios for API calls
- Modern CSS with responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your backend API URL
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
admin/
├── src/
│   ├── config/      # API configuration
│   ├── pages/       # Page components
│   ├── components/  # Reusable components
│   ├── services/    # API services
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── public/          # Static assets
└── package.json     # Dependencies
```

## Features

- ✅ Modern, responsive UI design
- ✅ Backend API integration
- ✅ Health monitoring dashboard
- ✅ Ready for authentication implementation
- ✅ Easy to extend with new features

## Development

The admin dashboard runs on `http://localhost:5173` by default.
Make sure the backend server is running on `http://localhost:5001` for API features to work.

## Environment Variables

- `VITE_API_URL` - Backend API URL (default: http://localhost:5001)
