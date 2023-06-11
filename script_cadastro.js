//Recupera os valores do html
const formulario    = document.querySelector('form');

const nome          = document.getElementById('Nome');
const email         = document.getElementById('email');
const senha         = document.getElementById('senha');
const telefone      = document.getElementById('Telefone');
const dataNascimento = document.getElementById('Data_nascimento');
const cidade        = document.getElementById('cidade');
const estado        = document.getElementById('estado');
const endereco      = document.getElementById('Endereço');
const botao = document.getElementById('submit');

var isLogado = localStorage.getItem("isUserCodetechLogado");
if (isLogado){
    window.location.href = "Principal.html";
}

//Muda o comportamento do botão de submeter
botao.addEventListener('click', function(event){
    event.preventDefault();

    const dadosFormulario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        telefone: telefone.value,
        data_nascimento: dataNascimento.value,
        cidade: cidade.value,
        estado: estado.value,
        endereco: endereco.value
    };

    const cliente = nome.value;

    //Transforma objeto em json
    const jsonData = JSON.stringify(dadosFormulario);

    //Salva no armazenamento do navegador
    localStorage.setItem(cliente, jsonData);

    //Limpando os campos do formulario
    nome.value = '';
    email.value = '';
    telefone.value = '';
    dataNascimento.value = '';
    cidade.value = '';
    estado.value = '';
    endereco.value = '';

    //Exibindo mensagem para dizer que tudo ocorreu bem
    alert('Formulário Salvo para o cliente: '+cliente)

    window.location.href = "Tela_login.html"
});