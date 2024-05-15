document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate name 
        const name = feedbackForm.querySelector('#feedbackName').value;
        if (!isValidName(name) || !isValidName(surname)) {
            alert('Name should be more than 2 letters.');
            return;
        }

        // Validate phone number format
        const phoneNumber = feedbackForm.querySelector('#feedbackPhoneNumber').value;
        if (!isValidPhoneNumber(phoneNumber)) {
            alert('Please enter a valid phone number starting with 7 and containing 8 digits.');
            return;
        }

        // Validate email format
        const email = feedbackForm.querySelector('#feedbackEmail').value;
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address ending with "@gmail.com".');
            return;
        }

        // Get form data
        const formData = new FormData(feedbackForm);
        const feedbackData = {};
        formData.forEach(function (value, key) {
            feedbackData[key] = value;
        });

        // Call function to store feedback data (replace with backend logic)
        storeFeedbackData(feedbackData);

        // Reset form
        feedbackForm.reset();
    });

    function isValidName(name) {
        // Check if name has more than 2 letters
        return name.length > 2 , name.length = 8;
    }

    function isValidPhoneNumber(phoneNumber) {
        // Check if phone number starts with 7 and contains 8 digits
        return /^7\d{7}$/.test(phoneNumber);
    }

    function isValidEmail(email) {
        // Check if email ends with "@gmail.com"
        return email.endsWith("@gmail.com");
    }

    function storeFeedbackData(data) {
        // This is where you would make an AJAX request to your backend
        // For example, you can use Fetch API or jQuery AJAX to send data to your server
        // Here's a simple example using Fetch API
        fetch("/store-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Feedback data stored:', data);
            // Optionally, you can display a success message to the user
            alert('Thank you for your feedback!');
        })
        .catch(error => {
            console.error('Error storing feedback data:', error);
            // Optionally, you can display an error message to the user
            alert('An error occurred while submitting feedback. Please try again later.');
        });
    }
});
