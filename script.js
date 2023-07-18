function checkCredentials() {
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();

    // You can modify this condition to check against your actual password.
    if (password === 'ashulovepraphu') {
        window.location.href = `welcome.html?name=${encodeURIComponent(name)}`;
    } else {
        errorMessage.textContent = 'Invalid password. Please try again.';
        errorMessage.classList.add('show');
    }
}

const nameInput = document.getElementById('name');
const errorMessage = document.getElementById('error-message');

nameInput.addEventListener('input', () => {
    if (errorMessage.classList.contains('show')) {
        errorMessage.classList.remove('show');
    }
});

