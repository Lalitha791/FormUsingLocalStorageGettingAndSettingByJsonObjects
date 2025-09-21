# FormUsingLocalStorageGettingAndSettingByJsonObjects


Certainly. Here's a clean, emoji-free version of your GitHub README:

# User Registration Form

A responsive user registration form built with HTML, CSS, and JavaScript. This project demonstrates client-side validation, real-time error handling, and redirection using query parameters.

## Features

- Responsive layout with modern styling
- Required field validation for First Name and Phone
- Optional validation for Email format
- Real-time error feedback on blur and input
- Redirects to `home.html` with query parameters on successful submission
- Modular JavaScript for maintainability

## Project Structure

```
├── index.html        # Main registration form
├── form.js           # Validation and submission logic
├── home.html         # Redirect target (optional)
└── README.md         # Project documentation
```

## Validation Logic

- First Name: Required, non-empty
- Phone: Required, must match regex for digits, spaces, hyphens, parentheses, and optional plus sign
- Email: Optional, but must match standard email format if provided

## How to Run

1. Clone the repository:
   ```
   git clone https://github.com/your-username/user-registration-form.git
   cd user-registration-form
   ```

2. Open `index.html` in your browser.

3. Fill out the form and click Submit to test validation and redirection.

## Notes

- The form redirects to `home.html` with query parameters. You can customize `home.html` to display submitted data or handle it server-side.
- This is a front-end-only demo with no backend integration.

