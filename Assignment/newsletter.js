document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var emailInput = document.getElementById("emailInput");
    var errorMessage = document.getElementById("error-message");
    var successMessage = document.getElementById("success-message");
  
    if (!isValidEmail(emailInput.value)) {
      errorMessage.textContent = "Please enter a valid email address.";
      successMessage.textContent = "";
      return;
    }
  
    // Store email address in localStorage
    var emails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];
    emails.push(emailInput.value);
    localStorage.setItem("newsletterEmails", JSON.stringify(emails));
  
    // Clear input field and error message after successful submission
    emailInput.value = "";
    errorMessage.textContent = "";
  
    // Display "Subscribed" message
    successMessage.textContent = "Subscribed";
  
    // Optionally, you can add a delay to remove the "Subscribed" message after a few seconds
    setTimeout(function() {
      successMessage.textContent = "";
    }, 3000); // 3000 milliseconds = 3 seconds
  });
  
  function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  