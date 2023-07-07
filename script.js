                // Toggle Function
function toggle() {
    let result = document.getElementById('result');
    let signUp = document.getElementById('signup');
    let logIn = document.getElementById('login');
    let screen = document.querySelector('screen');

    if (signUp.classList.contains('hidden')) {
        signUp.classList.remove('hidden');
        logIn.classList.add('hidden');
        result.classList.add('hidden');
    } else {
        signUp.classList.add('hidden');
        logIn.classList.add('hidden');
        result.classList.remove('hidden');
    }
}

function toggle1() {
    let result = document.getElementById('result');
    let logIn = document.getElementById('login');
    let signUp = document.getElementById('signup');

    if (logIn.classList.contains('hidden')) {
        logIn.classList.remove('hidden');
        signUp.classList.add('hidden');
        result.classList.add('hidden');
    } else {
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        result.classList.remove('hidden');
    }
}
