// window.onload faz uma função ser executada após a página carregar
window.onload = function() {
    // busca dados salvos e os armazena nas variáveis
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const senha = localStorage.getItem("senha");
    const sexo = localStorage.getItem("sexo");

    // para os dados que já existirem, são colocados seus respectivos valores nos campos do formulário
    if (username) document.getElementById("username").value = username;
    if (email) document.getElementById("email").value = email;
    if (senha) document.getElementById("senha").value = senha;
    // if (sexo) verifica se existe algum valor salvo para sexo
    if (sexo) {
        // busca no html um input do tipo radio com: name="sexo" e value com o valor salvo (conforme a opção selecionada)
        const radio = document.querySelector(`input[name="sexo"][value="${sexo}"]`);
        if (radio) radio.checked = true;
    } 
};

// limpa os últimos dados preenchidos
localStorage.clear();

// quando o formulário for enviado, clicando no botão, será executada essa função
document.getElementById("editar-cad").addEventListener("submit", function (e) {     // (e) representa o envio do formulário
    // e.preventDefault evita o formulário recarregar a página sozinho após alterações
    e.preventDefault();

    // capta os dados que o usuário preencheu nos campos
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    // ?.value é operador de encadeamento que se encontrou o botão marcado, capta esse valor (value), senão dá erro e retorna undefined
    // || "" se for undefined o retorno será string vazia, evitando erros caso o user não tenha marcado nenhum opção
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value || "";

    // armazena os dados atualizados
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    localStorage.setItem("sexo", sexo);

    showMessag("Dados atualizados com sucesso!");
});

function showMessag(text) {
    document.getElementById("message-text").innerText = text;
    document.getElementById("message").style.display = 'block';
}

function closeMessag() {
    document.getElementById("message").style.display = 'none';
}

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