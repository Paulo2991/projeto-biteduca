document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('inputPassword');
    const error= document.querySelector('.erro');

    passwordInput.addEventListener('blur', () => {
        const password = passwordInput.value;

        const regexUppercase = /[A-Z]/;
        const regexLowerCase = /[a-z]/;
        const regexDigit = /\d/;
        const regexSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

        if (password.length >= 8 && regexUppercase.test(password) && regexLowerCase.test(password) && regexDigit.test(password) && regexSpecialChar.test(password)) {
            error.textContent= '';
            window.location.href = '/pages/aluno/areaDoAluno.html'
        }else{
            error.textContent = 'Senha invalída';

            passwordInput.value= "";

            passwordInput.focus();
        }

       
    });
});