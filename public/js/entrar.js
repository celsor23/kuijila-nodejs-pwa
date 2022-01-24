// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUr261XPvHeRBb72mTSG9UKJAQ7wZLnVc",
  authDomain: "kuijila.firebaseapp.com",
  projectId: "kuijila",
  storageBucket: "kuijila.appspot.com",
  messagingSenderId: "107332910029",
  appId: "1:107332910029:web:7cfb8ffe1d650331666284",
  measurementId: "G-ZQ5BHS4LVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.setPersistence("SESSION");

console.log(app);

const mostrarButton = document.querySelector(".mostrar-btn");
const passwordInput = document.querySelector(".password-input");

mostrarButton.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  } else if (passwordInput.getAttribute("type") === "text") {
    passwordInput.setAttribute("type", "password");
  }
});
