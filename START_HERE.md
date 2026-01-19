# 🚀 Quick Start Guide - AiCoach

## ⚡ Get Started in 3 Steps

### Step 1: Start the Backend Server
Open a terminal and run:
```bash
cd backend
npm run dev
```

✅ You should see: `🚀 Server is running on port 5000`

---

### Step 2: Start the Admin Dashboard
Open a **NEW terminal** and run:
```bash
cd admin
npm run dev
```

✅ Your browser should open automatically at `http://localhost:5173`
✅ You should see a beautiful purple dashboard with "Backend API Status: healthy"

---

### Step 3: Start the Mobile App
Open **ANOTHER NEW terminal** and run:
```bash
cd mobile
npm start
```

✅ You'll see a QR code in the terminal
✅ Scan it with the Expo Go app (download from App Store/Play Store)
✅ Or press `i` for iOS simulator, `a` for Android emulator

---

## 🎉 That's It!

You now have:
- 📱 Mobile app running on your phone/simulator
- 💻 Admin dashboard at http://localhost:5173
- 🔧 Backend API at http://localhost:5001

All three are connected and working together!

---

## 📱 Testing the Connection

### In the Admin Dashboard:
- Click the "Refresh Status" button
- You should see "Backend API Status: healthy"

### In the Mobile App:
- Tap the "Refresh API Status" button
- You should see the status change to "healthy"

If you see these working, **congratulations!** Your full-stack app is ready.

---

## ❓ Troubleshooting

**Backend won't start?**
- Make sure port 5000 isn't already in use
- Check that you're in the `backend` folder

**Admin dashboard shows "error"?**
- Make sure the backend is running first
- Check the backend terminal for errors

**Mobile app can't connect?**
- Make sure backend is running
- For physical devices: Update the API URL in `mobile/src/config/api.js` with your computer's IP address
- For simulators: Should work with localhost

---

## 📚 Next Steps

Once everything is running, check out:
1. `README.md` - Full project documentation
2. `SETUP.md` - Detailed setup and development guide
3. Individual README files in each folder (mobile, admin, backend)

---

## 💡 Pro Tips

- Keep all three terminals open while developing
- Changes in mobile/admin will hot-reload automatically
- Backend will restart automatically on changes (thanks to nodemon)
- Check all three terminals for errors if something isn't working

---

**Happy Coding! 🎨**

Need help? Check the documentation files or review the code in each folder.
