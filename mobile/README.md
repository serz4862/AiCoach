# AiCoach Mobile App

React Native mobile application for AiCoach, built with Expo.

## Tech Stack

- React Native
- Expo SDK 54
- Axios for API calls
- React Native Safe Area Context

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on specific platform:
```bash
npm run android  # For Android
npm run ios      # For iOS
npm run web      # For Web
```

## Project Structure

```
mobile/
├── src/
│   ├── config/      # Configuration files
│   ├── screens/     # Screen components
│   ├── components/  # Reusable components
│   └── services/    # API services
├── App.js           # Entry point
├── app.json         # Expo configuration
└── package.json     # Dependencies
```

## Configuration

The API base URL is configured in `src/config/api.js`:
- Development: `http://localhost:5000`
- Production: Update with your production API URL

## Features

- ✅ API integration with backend
- ✅ Health check functionality
- ✅ Modern UI design
- ✅ Safe area handling for iOS/Android

## Development

Make sure the backend server is running on `http://localhost:5000` before testing API features.
