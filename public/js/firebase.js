// Import Firebase modules (ensure this script runs in a module environment)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCByGRx9pCDen1GwbqapPVZWxDWyo73NGQ",
    authDomain: "cmc-guide.firebaseapp.com",
    databaseURL: "https://cmc-guide-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cmc-guide",
    storageBucket: "cmc-guide.firebasestorage.app",
    messagingSenderId: "77514300475",
    appId: "1:77514300475:web:bd655a1bbe7de200bd901e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function to handle Google Sign-In
function signInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("User Info:", user);
            alert(`Welcome ${user.displayName}!`);
            window.location.href = "index.html"; // Redirect after login
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// Attach event listener to Google sign-in button
document.addEventListener("DOMContentLoaded", function() {
    const googleButton = document.querySelector(".google-auth");
    if (googleButton) {
        googleButton.addEventListener("click", signInWithGoogle);
    } else {
        console.error("Google Sign-In button not found!");
    }
});
