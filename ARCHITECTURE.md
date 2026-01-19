# AiCoach - System Architecture

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         AiCoach System                          │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐         ┌──────────────────┐
│   Mobile App     │         │ Admin Dashboard  │
│   (React Native) │         │     (React)      │
│                  │         │                  │
│  Port: Expo      │         │  Port: 5173      │
└────────┬─────────┘         └────────┬─────────┘
         │                            │
         │          HTTP/REST         │
         │                            │
         └────────────┬───────────────┘
                      │
                      ▼
         ┌────────────────────────┐
         │   Backend API Server   │
         │   (Node.js/Express)    │
         │                        │
         │     Port: 5000         │
         └───────────┬────────────┘
                     │
                     ▼
         ┌────────────────────────┐
         │   MongoDB Database     │
         │                        │
         │   Port: 27017          │
         └────────────────────────┘
```

## 📱 Mobile App Architecture

**Technology**: React Native + Expo

**Structure**:
```
mobile/
├── src/
│   ├── config/
│   │   └── api.js              # Axios client, API configuration
│   ├── screens/
│   │   └── HomeScreen.js       # Main home screen
│   ├── components/             # Reusable UI components
│   └── services/               # API service functions
└── App.js                      # Entry point with SafeAreaView
```

**Key Features**:
- Axios HTTP client for API calls
- Environment-aware API URLs (dev/prod)
- Safe area handling for iOS/Android
- Modern, responsive UI design

**Communication**:
- REST API calls to backend at `http://localhost:5000`
- JSON data format
- Token-based authentication (ready to implement)

---

## 💻 Admin Dashboard Architecture

**Technology**: React 18 + Vite

**Structure**:
```
admin/
├── src/
│   ├── config/
│   │   └── api.js              # Axios client with interceptors
│   ├── pages/
│   │   ├── Dashboard.jsx       # Main dashboard page
│   │   └── Dashboard.css       # Dashboard styles
│   ├── components/             # Reusable components
│   └── services/               # API services
└── App.jsx                     # Main app component
```

**Key Features**:
- Vite for fast development & HMR
- Modern responsive CSS design
- Real-time API health monitoring
- Statistics dashboard
- Ready for authentication

**Communication**:
- REST API calls to backend
- LocalStorage for auth tokens
- Environment variables via Vite
- Automatic 401 handling (redirects to login)

---

## 🔧 Backend API Architecture

**Technology**: Node.js + Express

**Structure**:
```
backend/
├── config/
│   └── database.js             # MongoDB connection
├── routes/                     # API route definitions
├── models/                     # Mongoose schemas
├── controllers/                # Business logic
├── middleware/                 # Auth, validation, etc.
└── server.js                   # Express app & server
```

**Key Features**:
- RESTful API design
- CORS enabled
- Environment-based configuration
- Modular folder structure
- Error handling middleware
- Ready for JWT authentication
- MongoDB integration ready

**Current Endpoints**:
```
GET  /              # API info
GET  /health        # Health check
```

**Planned Endpoints**:
```
POST   /api/auth/register      # User registration
POST   /api/auth/login         # User login
GET    /api/users              # Get users (admin)
POST   /api/users              # Create user
GET    /api/users/:id          # Get user by ID
PUT    /api/users/:id          # Update user
DELETE /api/users/:id          # Delete user
```

---

## 🔄 Data Flow

### User Action Flow (Example: API Health Check)

```
1. User Action
   │
   ├─ Mobile: Tap "Refresh API Status" button
   └─ Admin: Click "Refresh Status" button
   │
   ▼

2. API Call
   │
   ├─ Mobile: apiClient.get('/health')
   └─ Admin: apiClient.get('/health')
   │
   ▼

3. Backend Processing
   │
   ├─ Express receives request
   ├─ Route handler processes
   └─ Returns JSON response
   │
   ▼

4. Response Handling
   │
   ├─ Mobile: Updates state with response
   └─ Admin: Updates status display
   │
   ▼

5. UI Update
   │
   ├─ Mobile: Shows "healthy" status in green
   └─ Admin: Shows "healthy" badge
```

---

## 🔐 Authentication Flow (Ready to Implement)

```
┌─────────────┐
│   Client    │
│ (Mobile/Web)│
└──────┬──────┘
       │
       │ 1. POST /api/auth/login
       │    { email, password }
       ▼
┌─────────────┐
│   Backend   │
│             │
│ 2. Validate │
│ 3. Generate │
│    JWT      │
└──────┬──────┘
       │
       │ 4. Return { token, user }
       ▼
┌─────────────┐
│   Client    │
│             │
│ 5. Store    │
│    token    │
└──────┬──────┘
       │
       │ 6. Subsequent requests
       │    Authorization: Bearer <token>
       ▼
┌─────────────┐
│   Backend   │
│             │
│ 7. Verify   │
│    JWT      │
└──────┬──────┘
       │
       │ 8. Return protected data
       ▼
┌─────────────┐
│   Client    │
└─────────────┘
```

---

## 🗄️ Database Schema (Ready to Implement)

### User Model Example
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  name: String,
  role: String (user/admin),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🚀 Deployment Architecture (Future)

```
┌──────────────────┐         ┌──────────────────┐
│  Mobile App      │         │  Admin Dashboard │
│                  │         │                  │
│  App Store /     │         │  Vercel/Netlify  │
│  Play Store      │         │  Static Hosting  │
└────────┬─────────┘         └────────┬─────────┘
         │                            │
         │                            │
         └────────────┬───────────────┘
                      │
                      ▼
         ┌────────────────────────┐
         │   Backend API          │
         │   Heroku/Railway/AWS   │
         │   Node.js Server       │
         └───────────┬────────────┘
                     │
                     ▼
         ┌────────────────────────┐
         │   MongoDB Atlas        │
         │   Cloud Database       │
         └────────────────────────┘
```

---

## 🛠️ Technology Stack Summary

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Mobile App | React Native + Expo | Cross-platform mobile app |
| Admin Dashboard | React 18 + Vite | Web-based admin interface |
| Backend | Node.js + Express | RESTful API server |
| Database | MongoDB + Mongoose | Data persistence |
| API Client | Axios | HTTP requests |
| Auth (planned) | JWT | Stateless authentication |
| Dev Tools | Nodemon | Auto-reload during dev |

---

## 📊 Port Configuration

| Service | Port | URL |
|---------|------|-----|
| Backend API | 5000 | http://localhost:5000 |
| Admin Dashboard | 5173 | http://localhost:5173 |
| Mobile App | 19000 | Expo Dev Tools |
| MongoDB | 27017 | mongodb://localhost:27017 |

---

## 🔒 Security Considerations (To Implement)

1. **Authentication**
   - JWT tokens with expiration
   - Secure password hashing (bcrypt)
   - Refresh token mechanism

2. **API Security**
   - Rate limiting
   - Input validation
   - SQL injection prevention (Mongoose helps)
   - XSS protection

3. **CORS**
   - Configured allowed origins
   - Credentials support
   - Pre-flight requests

4. **Environment Variables**
   - Sensitive data in .env
   - Different configs for dev/prod
   - Never commit .env files

---

## 📈 Scalability Considerations

1. **Horizontal Scaling**
   - Stateless backend (JWT)
   - Load balancer ready
   - Database indexing

2. **Performance**
   - API response caching
   - Database query optimization
   - CDN for static assets

3. **Monitoring**
   - Error logging
   - Performance metrics
   - Health check endpoints

---

This architecture provides a solid foundation for building a production-ready application with modern best practices and scalability in mind.
