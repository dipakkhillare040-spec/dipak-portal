// Firebase SDK import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔥 YOUR REAL CONFIG (copy from Firebase)
const firebaseConfig = {
  apiKey: "PASTE_YOUR_REAL_API_KEY",
  authDomain: "dipak-portal.firebaseapp.com",
  projectId: "dipak-portal",
  storageBucket: "dipak-portal.firebasestorage.app",
  messagingSenderId: "395089848028",
  appId: "1:395089848028:web:fe3267620c3bfabfae7619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export
export { auth };
