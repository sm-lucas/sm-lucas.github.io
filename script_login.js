//Recupera os valores do html
const formulario    = document.querySelector('form');

const nome          = document.getElementById('login');
const senha         = document.getElementById('senha');

const botao = document.getElementById('submit');

var isLogado = localStorage.getItem("isUserCodetechLogado");
if (isLogado){
    window.location.href = "Principal.html";
}

//Muda o comportamento do botão de submeter
botao.addEventListener('click', function(event){
    event.preventDefault();

    if (nome.value == '' || senha.value == ''){
        alert("usuário e senha devem ser informados");
        return;
    }

    //recupera valor do BD
    var clienteJson = localStorage.getItem(nome.value);

    //valida se encontrou o usuario no BD
    if (clienteJson == null){
        alert("usuário não encontrado");
        return;
    }

    //Transforma o json em um objeto
    var cliente = JSON.parse(clienteJson);

    //valida se senha do formulario é a mesma salva no DB
    if (cliente.senha == senha.value){
        alert("usuário logado")
        localStorage.setItem("isUserCodetechLogado", true);
        window.location.href = "Principal.html"
        return;
    }
    alert("Senha incorreta")
});