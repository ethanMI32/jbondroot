// login.js

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    const validCredentials = {
        "LeChiffre": "Pl@yap0k3r",
        "LadyM": "S@ft3ypriority",
        "VesperLynd": "LuvB0nd",
        "FelixLeiter": "b0rn1nus@",
        "MrWhite": "Tr@1t0r",
        "RaoulSilva": "H@t3bond",
        "ErnstBlofeld": "3rns1bl0f3ld",
        "ValdoObruchev": "Primo_2021"
    };

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if the entered username exists and the password matches
        if (validCredentials.hasOwnProperty(username) && validCredentials[username] === password) {
            alert("Login successful! Redirecting...");
            
            // Redirect to the user's specific page (using a simple mapping for demonstration)
            const userPages = {
                "LeChiffre": "lechiffre.html",
                "ErnstBlofeld": "ernstblofeld.html",
                "ValdoObruchev": "admin_mainpage.html"
            };
            
            if (userPages.hasOwnProperty(username)) {
                window.location.href = userPages[username];
            } else {
                alert("Welcome, " + username);
            }
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
