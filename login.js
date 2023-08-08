// JavaScript source code
function validateCredentials(event) {
    event.preventDefault();

var users = [
    { id: 1, username: "James", password: "Bond"},
    { id: 2, username: "Vesper", password: "Lynd"},
    { id: 3, username: "Valdo", password: "Obruchev"},
    { id: 4, username: "james007", password: "parola4"},
    { id: 5, username: "buckye", password: "parola5"},
    { id: 6, username: "michael", password: "parola6"},
    { id: 7, username: "steve", password: "parola7"},
    { id: 8, username: "smith", password: "parola8"}
];
  

    if (username === Username && password === Password) {
        alert("Login successful! Please click button.");
        // Redirect to the new page if the credentials are correct.
        window.location.href = "admin_page.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}