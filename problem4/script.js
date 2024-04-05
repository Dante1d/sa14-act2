const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const usernameValue = usernameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (usernameValue.length < 6) {
    usernameError.textContent = 'Username must be at least 6 characters';
  } else {
    usernameError.textContent = '';
  }

  if (!validateEmail(emailValue)) {
    emailError.textContent = 'Invalid email format';
  } else {
    emailError.textContent = '';
  }

  if (passwordValue.length < 8 || !/[A-Z]/.test(passwordValue) || !/\d/.test(passwordValue)) {
    passwordError.textContent = 'Password must be at least 8 characters long and contain at least one capital letter and one number';
  } else {
    passwordError.textContent = '';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
