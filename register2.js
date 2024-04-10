import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-kAE6FU7f2eAG5kowjDdTfZsyrayCn5A",
  authDomain: "loginregister-153de.firebaseapp.com",
  databaseURL: "https://loginregister-153de-default-rtdb.firebaseio.com",
  projectId: "loginregister-153de",
  storageBucket: "loginregister-153de.appspot.com",
  messagingSenderId: "334939976026",
  appId: "1:334939976026:web:deb883d3f870e20fd70363",
  measurementId: "G-KZ9KT52JQ2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("here");


});
