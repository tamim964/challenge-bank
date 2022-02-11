document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email')
    const emailValue = emailField.value

    const passField = document.getElementById('pass')
    const passValue = passField.value
    if (emailValue == 'tamim@gmail.com' && passValue == 'super') {
        window.location.href = 'banking.html'
    }

})