    //recupera valor do BD
    var isLogado = localStorage.getItem("isUserCodetechLogado");
    var logout = document.getElementById('logout');

    if (isLogado == null || !isLogado){
        window.location.href = "Tela_login.html";
    }

    logout.addEventListener('click', function(event){
        event.preventDefault();

        localStorage.removeItem("isUserCodetechLogado");
        window.location.href = "Tela_login.html";
    })