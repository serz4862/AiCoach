# 🚀 AiCoach - Quick Reference Guide

**Last Updated:** January 19, 2026  
**Status:** ✅ All Systems Ready

---

## 🎯 Quick Commands

### Start Everything (3 Terminals)

**Terminal 1 - Backend:**
```bash
cd /Users/sauravkumar/Desktop/AiCoach/backend
npm run dev
```
🟢 http://localhost:5001

**Terminal 2 - Admin:**
```bash
cd /Users/sauravkumar/Desktop/AiCoach/admin
npm run dev
```
🟢 http://localhost:5173

**Terminal 3 - Mobile:**
```bash
cd /Users/sauravkumar/Desktop/AiCoach/mobile
npm start
```
🟢 Expo QR Code

---

## 📱 Test Everything Works

### 1. Test Backend
```bash
curl http://localhost:5001/health
```
Expected: `{"status":"healthy",...}`

### 2. Test Admin
Open browser: http://localhost:5173  
Expected: Purple dashboard with "Backend API Status: healthy"

### 3. Test Mobile
Scan QR code or press `i` (iOS) / `a` (Android)  
Expected: "Welcome to AiCoach" screen

---

## 🏗️ Build Commands

```bash
# Build admin for production
cd admin && npm run build

# Build mobile for web
cd mobile && npx expo export --platform web

# Build from root
npm run build:all
```

---

## 📂 Project Structure

```
AiCoach/
├── backend/     → Node.js API (Port 5001)
├── admin/       → React Dashboard (Port 5173)
├── mobile/      → React Native App (Expo)
└── docs/        → 9 documentation files
```

---

## 🔧 Common Issues

**Port already in use:**
```bash
lsof -ti:5001 | xargs kill -9
```

**Dependencies issues:**
```bash
npm run clean
npm run install-all
```

**Rebuild everything:**
```bash
npm run clean:builds
npm run build:all
```

---

## 📊 Project Status

- ✅ Backend: Working
- ✅ Admin: Built & Tested
- ✅ Mobile: Built & Tested
- ✅ Builds: All Successful
- ✅ Errors: Zero
- ✅ Documentation: Complete

---

## 📚 Documentation

1. `START_HERE.md` - Quick start (3 steps)
2. `README.md` - Full documentation
3. `BUILD.md` - Build & deployment
4. `TEST_REPORT.md` - Test results
5. `FINAL_STATUS.md` - Project status
6. `ARCHITECTURE.md` - System design
7. `SETUP.md` - Detailed setup
8. `CHECKLIST.md` - Verification
9. `QUICK_REFERENCE.md` - This file

---

## 🚀 Next Steps

1. Start all three apps
2. Verify they're communicating
3. Read the documentation
4. Start building features!

---

## 🎉 You're All Set!

Everything is tested, built, and ready to go.  
Happy coding! 🚀
