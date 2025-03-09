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
firebase.initializeApp(firebaseConfig);

// Function to handle Google Sign-In
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider)
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
    googleButton.addEventListener("click", signInWithGoogle);
});