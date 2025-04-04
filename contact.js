// Program the behavior of web pages
// Function to validate the form fields
function validateForm() {

    // Get the value of the form fields using ID
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var gdpr = document.getElementById('gdpr').checked; 

    // Validate Name: Check if the name field is empty or contain special/number characters
    var namePattern = /^[a-zA-Z\s]+$/; //Allow as Pattern only alphabetic characters and spaces. 
    if (name == "" || !namePattern.test(name)) { 
        alert("Name must be filled out and contain only alphabetic characters.");
        return false; // Return error message and prevent form submission.
    }

    // Validate Email: Check if the email is valid using a regular expression
    var phonePattern = /^\d{9,10}$/; //Numeric pattern, min. 09 | max 10 digits.    
        if (phone == "" || !phonePattern.test(phone)) {
        alert("Please enter a valid phone number - 09 to 10 digits long.");
        return false; // Return error message and prevent form submission.
    }

    // Validate Email: Check if the email is valid using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Return error message and prevent form submission.
    }

    // Validate Message: Check if the message field is empty
    if (message == "") { 
        alert("Message must be filled out");
        return false; // Return error message and prevent form submission.
    }

    // Validate GDPR CheckBox: If empty, return message
    if (!gdpr) {
        alert("You must agree with the Terms and Conditions before submit your form.");
        return false; // Return error message and prevent form submission.
    }

    // If all validations pass, show a success message
    alert("Form submitted successfully! Thank you for your message.");
    return true; // Return error message and prevent form submission.
}



