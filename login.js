// JavaScript source code
function validateCredentials(event) {
    event.preventDefault();

var users = [
    { id: 1, username: "John", password: "Smith", Money: "$0" },
    { id: 2, username: "vesper", password: "lynd", Money: "$5" },
    { id: 3, username: "john", password: "parola3", Money: "$10" },
    { id: 4, username: "james007", password: "parola4", Money: "$15,0000.000" },
    { id: 5, username: "buckye", password: "parola5", Money: "$12" },
    { id: 6, username: "michael", password: "parola6", Money: "$100" },
    { id: 7, username: "steve", password: "parola7", Money: "$0" },
    { id: 8, username: "smith", password: "parola8", Money: "$10" }
];
  

    if (username === Username && password === Password) {
        alert("Login successful! Please click button.");
        // Redirect to the new page if the credentials are correct.
        window.location.href = "admin_page.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}