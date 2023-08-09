document.getElementById("submitButton").addEventListener("click", function() {
    // Get the input value
    const infoInput = document.getElementById("infoInput").value;

    // Now you can do whatever you want with the entered information.
    // For example, you can display it in a container on the same page:
    const container = document.createElement("div");
    container.textContent = infoInput;
    document.body.appendChild(container);

    if (infoInput === "Islands of Japan") {
      alert("Terroist has been found! Flag is cyber007{Lustifyarian_Safin}");
    } else {
      alert("Invalid username or password. Please try again.");
    }
    // If you want to submit the information to a server, you can use AJAX or a form submission:
    // For example, using Fetch API for sending data to a server:
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