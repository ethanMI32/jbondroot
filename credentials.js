function validateCredentials(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // List of valid usernames and passwords
    const validCredentials = [
        { username: "LeChiffre", password: "Pl@yap0k3r", page: "lechiffre.html" },
        { username: "LadyM", password: "S@ft3ypriority", page: "" },
        { username: "VesperLynd", password: "LuvB0nd", page: "" },
        { username: "FelixLeiter", password: "b0rn1nus@", page: "" },
        { username: "MrWhite", password: "Tr@1t0r", page: "" },
        { username: "RaoulSilva", password: "H@t3bond", page: "" },
        { username: "ErnstBlofeld", password: "3rns1bl0f3ld", page: "ernstblofeld.html" },
        { username: "ValdoObruchev", password: "Primo_2021", page: "admin_mainpage.html" },
    ];
    
    // Find the user's entry in the valid credentials list
    const userEntry = validCredentials.find(cred => cred.username === username && cred.password === password);
    
    if (userEntry) {
        alert("Login successful! Redirecting...");
        // Redirect to the user's specific page
        window.location.href = userEntry.page;
    } else {
        alert("Invalid credentials. Please try again.");
    }
}