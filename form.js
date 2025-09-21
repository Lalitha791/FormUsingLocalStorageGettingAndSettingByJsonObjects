// Form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    
    // Error elements
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    
    // Validation functions
    function validateFirstName() {
        const value = firstNameInput.value.trim();
        if (value === '') {
            firstNameError.textContent = 'First name is required';
            return false;
        } else {
            firstNameError.textContent = '';
            return true;
        }
    }
    
    function validatePhone() {
        const value = phoneInput.value.trim();
        
        if (value === '') {
            phoneError.textContent = 'Phone is required';
            return false;
        } else if (!isValidPhoneNumber(value)) {
            phoneError.textContent = 'Please enter a valid phone number';
            return false;
        } else {
            phoneError.textContent = '';
            return true;
        }
    }
    
    function validateEmail() {
        const value = emailInput.value.trim();
        if (value !== '' && !isValidEmail(value)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }
    
    function isValidPhoneNumber(phone) {
        // Basic phone number validation (allows digits, spaces, hyphens, parentheses, and +)
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    }
    
    function isValidEmail(email) {
        // Comprehensive email validation regex
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email);
    }
    
    // Real-time validation
    firstNameInput.addEventListener('blur', validateFirstName);
    phoneInput.addEventListener('blur', validatePhone);
    emailInput.addEventListener('blur', validateEmail);
    
    // Clear errors on input
    firstNameInput.addEventListener('input', function() {
        if (firstNameError.textContent) {
            firstNameError.textContent = '';
        }
    });
    
    phoneInput.addEventListener('input', function() {
        if (phoneError.textContent) {
            phoneError.textContent = '';
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (emailError.textContent) {
            emailError.textContent = '';
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all required fields
        const isFirstNameValid = validateFirstName();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        
        if (isFirstNameValid && isPhoneValid && isEmailValid) {
            // Collect form data
            const formData = {
                firstName: firstNameInput.value.trim(),
                lastName: lastNameInput.value.trim(),
                phone: phoneInput.value.trim(),
                email: emailInput.value.trim()
            };
            
            // Create query parameters
            const queryParams = new URLSearchParams();
            
            // Add parameters only if they have values
            if (formData.firstName) {
                queryParams.append('firstName', formData.firstName);
            }
            if (formData.lastName) {
                queryParams.append('lastName', formData.lastName);
            }
            if (formData.phone) {
                queryParams.append('phone', formData.phone);
            }
            if (formData.email) {
                queryParams.append('email', formData.email);
            }
            
            // Redirect to home page with query parameters
            const homePageUrl = 'home.html' + (queryParams.toString() ? '?' + queryParams.toString() : '');
            window.location.href = homePageUrl;
        }
    });
});
