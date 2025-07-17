function togglepassword() {
    let password = document.getElementById("senha");
    let icon = document.getElementById("toogle");

    if (password.type === 'password') {
        password.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash')
    }
    else {
        password.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function showMensag(text) {
    document.getElementById('message-text').innerText = text;
    document.getElementById('message').style.display= 'block';
}

function closeMessag() {
    document.getElementById('message').style.display = 'none';
}

function acessarConta() {
    let usernameInput = document.getElementById("username").value;
    let senhaInput = document.getElementById("senha").value;

    let usernameCadast = localStorage.getItem("username");
    let senhaCadast = localStorage.getItem("senha");

    if (usernameInput === usernameCadast && senhaInput === senhaCadast) {
        showMensag("Login realizado com sucesso!");
    }
    else {
        showMensag("Nome de usuário ou senha incorretos!");
    }
}