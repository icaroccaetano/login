function logar () {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if(login == "manny" && senha == "maltrata") {
        alert("Sucesso");
        location.href="home.html";
    } else {
        alert("Usuário ou senha incorretos");
    }

}