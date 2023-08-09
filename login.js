function validateCredentials(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // List of valid usernames and passwords
    const validCredentials = [
        { username: "ValdoObruchev", password: "Primo_2021" },
        { username: "james007", password: "y0ug0t1t" },
        { username: "mrwhite", password: "n0g@m3" }
    ];
    // Check if the entered credentials are valid
    const isValidCredential = validCredentials.some(cred => cred.username === username && cred.password === password);
    if (isValidCredential) {
        alert("Login successful! Please click the button.");
        // Redirect to the new page if the credentials are correct.
        window.location.href = "https://rootflag.vercel.app/admin_mainpage.js";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}