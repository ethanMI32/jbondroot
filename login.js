function validateCredentials(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // List of valid usernames and passwords
    const validCredentials = [
        { username: "ValdoObruchev", password: "Primo_2021" },
        { username: "FranzOberhauser", password: "h@t3b0nd" },
        { username: "Le Chiffre", password: "Pl@yap0k3r" }
    ];
    // Check if the entered credentials are valid
    const isValidCredential = validCredentials.some(cred => cred.username === username && cred.password === password);
    if (isValidCredential) {
        alert("Login successful! Please click the button.");
        // Redirect to the new page if the credentials are correct.
        window.location.href = "https://rootflag.vercel.app/admin_mainpage.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}