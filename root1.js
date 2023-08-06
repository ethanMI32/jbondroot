                                                                                                              
document.addEventListener("DOMContentLoaded", function() {
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Prevent form submission for demonstration purposes
  // Perform your login validation here
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "JamesBond" && password === "JamesBond") {
    alert("Login successful! Please click link");
    window.location.href="C:\Users\erick\OneDrive\Desktop\BethelTech_FinalProject\Root\root1.html";
  // Replace this with your actual login logic
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
});