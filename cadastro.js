function tooglepassword() {
    let password = document.getElementById("senha");
    let icon = document.getElementById("toogle");

    if (password.type === 'password') {
        password.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
    else {
        password.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function save() {
    // Valores do campo do formulario no html
    let usernameInput = document.getElementById("username").value;
    let senhaInput = document.getElementById("senha").value;
    let emailInput = document.getElementById("email").value;

    // De inicio tenta encontrar do localStorage a lista de usuários já salvos
    // || [] se não haver nada salvo, cria um array vazio
    // JSON.parse() transforma o texto JSON em objeto ou array, pois localStorage so armazena texto (string)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // find() procura se já existe esse usuario, de acordo com a o username e email
    let existUser = users.find(user=> user.username === usernameInput || user.email === emailInput);

    if (existUser) {
        showMessag('Erro: já tem uma conta cadastrada nesse email')
    }
    else {
        // se o user nao existir, cria um novo objeto com os dados do user
        let newUser = {
            username: usernameInput,
            senha: senhaInput,
            email: emailInput
        };

        // push() adiciona um item ao array de users
        users.push(newUser);

        // Salva o array atualizado no localStorage
        // JSON.stringfy() converte objeto ou array em texto
        localStorage.setItem("users", JSON.stringify(users));
        showMessag('Cadastro realizado com sucesso!');
    }
}

function showMessag(text) {
    document.getElementById("message-text").innerText = text;
    document.getElementById("message").style.display= 'block';
}

function closeMessag() {
    document.getElementById("message").style.display = 'none';
}