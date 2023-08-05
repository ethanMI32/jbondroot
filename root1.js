GNU nano 7.2                                                                                                      root1.js                                                                                                               
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

  if (username === "JamesBond" && password === "c6996e1c578bedbdc93664fa3c796deb") {
    alert("Login successful! Please click link");
    window.location.href="http://10.0.2.15/Root/root2.html";
  // Replace this with your actual login logic
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
});