# ✅ AiCoach Setup Checklist

Use this checklist to verify your setup is complete and working.

## 📦 Installation Verification

### ✅ Project Structure
- [x] Mobile app folder created
- [x] Admin dashboard folder created
- [x] Backend folder created
- [x] Root configuration files created

### ✅ Dependencies Installed

**Mobile App** (`mobile/`)
- [x] Expo installed
- [x] React Native installed
- [x] Axios installed
- [x] node_modules folder exists

**Admin Dashboard** (`admin/`)
- [x] React installed
- [x] Vite installed
- [x] Axios installed
- [x] React Router DOM installed
- [x] node_modules folder exists

**Backend** (`backend/`)
- [x] Express installed
- [x] CORS installed
- [x] Mongoose installed
- [x] Dotenv installed
- [x] Nodemon installed (dev)
- [x] node_modules folder exists

## 🗂️ File Structure Verification

### Mobile App Files
- [x] `App.js` - Main entry point
- [x] `src/config/api.js` - API configuration
- [x] `src/screens/HomeScreen.js` - Home screen
- [x] `package.json` - Dependencies
- [x] `README.md` - Documentation

### Admin Dashboard Files
- [x] `src/App.jsx` - Main app
- [x] `src/config/api.js` - API configuration
- [x] `src/pages/Dashboard.jsx` - Dashboard page
- [x] `src/pages/Dashboard.css` - Dashboard styles
- [x] `package.json` - Dependencies
- [x] `.gitignore` - Git ignore rules
- [x] `README.md` - Documentation

### Backend Files
- [x] `server.js` - Express server
- [x] `config/database.js` - DB configuration
- [x] `package.json` - Dependencies
- [x] `.env.example` - Environment template
- [x] `.gitignore` - Git ignore rules
- [x] `README.md` - Documentation
- [x] Folders: routes, models, controllers, middleware

### Root Files
- [x] `README.md` - Main documentation
- [x] `SETUP.md` - Setup guide
- [x] `START_HERE.md` - Quick start guide
- [x] `ARCHITECTURE.md` - Architecture docs
- [x] `CHECKLIST.md` - This file
- [x] `package.json` - Root package
- [x] `.gitignore` - Root git ignore

## 🧪 Testing the Setup

### Step 1: Test Backend
```bash
cd backend
npm run dev
```

**Expected Output:**
```
🚀 Server is running on port 5000
📍 API URL: http://localhost:5001
```

**Test it:**
- Open browser: http://localhost:5001
- Should see JSON: `{"message": "Welcome to AiCoach API", ...}`

**Health Check:**
- Open: http://localhost:5001/health
- Should see: `{"status": "healthy", "timestamp": "..."}`

✅ Backend working if you see these responses

---

### Step 2: Test Admin Dashboard
```bash
cd admin
npm run dev
```

**Expected Output:**
```
VITE v... ready in ...ms
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Test it:**
- Browser should open automatically
- Should see purple gradient dashboard
- Should see "AiCoach Admin Dashboard" heading
- Should see stats cards
- Backend status should show "healthy" (if backend is running)

✅ Admin dashboard working if you see the dashboard

---

### Step 3: Test Mobile App
```bash
cd mobile
npm start
```

**Expected Output:**
```
› Metro waiting on exp://...
› Scan the QR code above with Expo Go (Android) or...
```

**Test it:**
- Scan QR code with Expo Go app, OR
- Press `i` for iOS simulator, OR
- Press `a` for Android emulator

**In the app:**
- Should see "Welcome to AiCoach"
- Should see "Mobile App" subtitle
- Should see "Backend API Status" card
- Status should show "healthy" (if backend is running)
- Tap "Refresh API Status" button - should work

✅ Mobile app working if you see the home screen

---

## 🔗 Integration Testing

With all three apps running:

### Test 1: Backend → Admin
1. Keep backend running
2. Start admin dashboard
3. Check dashboard shows "Backend API Status: healthy"
4. Click "Refresh Status" button
5. Status should update

✅ Pass if status shows "healthy"

### Test 2: Backend → Mobile
1. Keep backend running
2. Start mobile app
3. Check mobile shows "Backend API Status: healthy"
4. Tap "Refresh API Status" button
5. Status should update

✅ Pass if status shows "healthy"

### Test 3: Stop Backend
1. Stop backend server (Ctrl+C)
2. In admin: Click "Refresh Status"
3. Should show "error" status
4. In mobile: Tap "Refresh API Status"
5. Should show "error" status

✅ Pass if both show error when backend is down

---

## 🚀 Ready for Development?

If all checkboxes above are checked and all tests pass, you're ready to start building features!

### Recommended First Features to Build:

1. **User Authentication**
   - [ ] Create User model
   - [ ] Add registration endpoint
   - [ ] Add login endpoint
   - [ ] Implement JWT middleware
   - [ ] Create login screens in mobile/admin

2. **Navigation**
   - [ ] Add React Navigation to mobile
   - [ ] Add React Router to admin
   - [ ] Create multiple screens/pages

3. **Database**
   - [ ] Install MongoDB locally or use MongoDB Atlas
   - [ ] Connect backend to database
   - [ ] Test CRUD operations

4. **Your Core Features**
   - [ ] Define your app's main purpose
   - [ ] Create necessary models
   - [ ] Build API endpoints
   - [ ] Create mobile screens
   - [ ] Create admin pages

---

## 🐛 Troubleshooting

### Common Issues

**Issue: Port already in use**
```bash
# Kill process on port 5000 (macOS/Linux)
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173 (macOS/Linux)
lsof -ti:5173 | xargs kill -9
```

**Issue: Dependencies not installed**
```bash
# From root directory
npm run install-all
```

**Issue: Mobile can't connect to backend**
- Update API URL in `mobile/src/config/api.js`
- Use your computer's IP instead of localhost for physical devices

**Issue: Git tracking .env files**
```bash
git rm --cached backend/.env
git rm --cached admin/.env
```

---

## 📊 Quick Status Check

Run these commands to verify everything is set up:

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check if all package.json exist
ls */package.json

# Check if all node_modules exist
ls */node_modules -d

# Count total files in project (should be 1000+)
find . -type f | wc -l
```

---

## 🎉 Success Criteria

You can consider the setup successful when:

- ✅ All three apps start without errors
- ✅ Backend responds to API calls
- ✅ Admin dashboard displays correctly
- ✅ Mobile app displays correctly
- ✅ Admin can communicate with backend
- ✅ Mobile can communicate with backend
- ✅ All tests in this checklist pass

---

**Once everything is checked, you're ready to build amazing features! 🚀**

Happy coding!
