document.getElementById("submitButton").addEventListener("click", function() {
    // Get the input value
    const infoInput = document.getElementById("infoInput").value;
    
    const container = document.createElement("div");
    container.textContent = infoInput;
    document.body.appendChild(container);

    if (infoInput === "Sea of Japan") {
      alert("Congratulations!! The nanobot factory farm has been found and destroyed!! The terrorist has been kill! Flag is cyber007{Lyutsifer Safin}");
    } else {
      alert("Invalid username or password. Please try again.");
    }
    /* fetch('https://example.com/submit', {
        method: 'POST',
        body: JSON.stringify({ info: infoInput }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        // Handle the server response here if needed
    }).catch(error => {
        // Handle error here if needed
    }); */

    // If you want to reset the input field after submission:
    document.getElementById("infoInput").value = "";
});
