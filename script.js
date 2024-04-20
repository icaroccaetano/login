function logar () {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if(login == "manny" && senha == "maltrata") {
        alert("Success");
        location.href="home.html";
    } else {
        alert("Incorrect username or password. Try again!");
    }

}