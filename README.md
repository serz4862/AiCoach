# AiCoach - Full Stack Application

A complete full-stack application with React Native mobile app, React admin dashboard, and Node.js backend.

## 🏗️ Project Structure

```
AiCoach/
├── mobile/          # React Native mobile app (Expo)
├── admin/           # React admin dashboard (Vite)
├── backend/         # Node.js/Express API server
└── README.md        # This file
```

## 🚀 Tech Stack

### Mobile App
- React Native
- Expo SDK 54
- Axios for API integration

### Admin Dashboard
- React 18
- Vite
- Modern responsive design
- Axios for API integration

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- CORS enabled

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- MongoDB installed and running (for backend)
- Expo CLI (optional, will be installed automatically)

### Setup All Applications

1. **Clone the repository** (if from git)
```bash
cd AiCoach
```

2. **Backend Setup**
```bash
cd backend
npm install
# Configure .env file
npm run dev
```
Backend will run on `http://localhost:5000`

3. **Admin Dashboard Setup**
```bash
cd admin
npm install
# Configure .env file (optional)
npm run dev
```
Admin dashboard will run on `http://localhost:5173`

4. **Mobile App Setup**
```bash
cd mobile
npm install
npm start
```
Then scan the QR code with Expo Go app on your phone, or press `i` for iOS simulator, `a` for Android emulator.

## 🎯 Quick Start

### Start Backend Server
```bash
cd backend
npm run dev
```

### Start Admin Dashboard
```bash
cd admin
npm run dev
```

### Start Mobile App
```bash
cd mobile
npm start
```

## 📱 Features

### Mobile App
- ✅ API integration ready
- ✅ Beautiful modern UI
- ✅ Safe area handling
- ✅ Health check functionality
- 🔄 Ready for feature development

### Admin Dashboard
- ✅ Modern responsive design
- ✅ Backend API integration
- ✅ Real-time health monitoring
- ✅ Statistics dashboard
- 🔄 Ready for user management
- 🔄 Ready for authentication

### Backend API
- ✅ Express server setup
- ✅ CORS enabled
- ✅ Environment configuration
- ✅ Health check endpoint
- ✅ Structured folder organization
- 🔄 Ready for database integration
- 🔄 Ready for authentication
- 🔄 Ready for API routes

## 🔧 Configuration

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/aicoach
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8081
```

### Admin (.env)
```env
VITE_API_URL=http://localhost:5000
```

### Mobile (src/config/api.js)
The API URL is automatically configured based on development/production mode.

## 🛠️ Development Workflow

1. Start the backend server first
2. Start the admin dashboard for web management
3. Start the mobile app for mobile development
4. All three applications communicate via the backend API

## 📝 API Endpoints

### Available Now
- `GET /` - API information
- `GET /health` - Health check

### Coming Soon
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/users` - Get all users (admin)
- And more...

## 🎨 Customization

### Mobile App
- Edit screens in `mobile/src/screens/`
- Add components in `mobile/src/components/`
- Configure API in `mobile/src/config/api.js`

### Admin Dashboard
- Edit pages in `admin/src/pages/`
- Add components in `admin/src/components/`
- Configure API in `admin/src/config/api.js`
- Customize styles in CSS files

### Backend
- Add routes in `backend/routes/`
- Add models in `backend/models/`
- Add controllers in `backend/controllers/`
- Add middleware in `backend/middleware/`

## 📚 Next Steps

1. ✅ Set up database connection (MongoDB)
2. ✅ Implement user authentication
3. ✅ Create API endpoints for your features
4. ✅ Add navigation to mobile app (React Navigation)
5. ✅ Add routing to admin dashboard (React Router)
6. ✅ Implement state management (Context API or Redux)
7. ✅ Add form validation
8. ✅ Implement error handling
9. ✅ Add loading states
10. ✅ Deploy to production

## 🤝 Contributing

This is your project! Feel free to modify and extend it as needed.

## 📄 License

ISC

## 🆘 Troubleshooting

### Mobile app can't connect to backend
- Make sure backend is running on port 5000
- Check that your phone/emulator can access localhost
- For physical devices, use your computer's IP address instead of localhost

### Admin dashboard shows API error
- Verify backend is running on http://localhost:5000
- Check CORS settings in backend
- Verify .env configuration

### Backend won't start
- Check if port 5000 is already in use
- Verify MongoDB is running
- Check .env configuration

## 💡 Tips

- Use `npm run dev` for development with hot reload
- Check browser console and terminal for errors
- Each app has its own README with detailed information
- Keep all three apps running for full functionality

---

**Happy Coding! 🚀**
