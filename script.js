document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get form elements
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailError = document.getElementById("emailError");

    // Reset error messages
    emailError.style.display = "none";

    // Validate email (required field)
    if (!email) {
        emailError.style.display = "block";
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        return;
    }

    // If validation passes, log the form data (or send it to a server)
    const formData = {
        name: name,
        email: email,
        message: message
    };

    console.log("Form submitted successfully:", formData);

    // Optionally, you can send the data to a server using fetch
    /*
    fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again.");
    });
    */

    // For now, just show a success message and reset the form
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
});