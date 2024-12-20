function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'manager' && password === '1234') {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}