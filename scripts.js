function ValidarEmail(){
    var email=document.getElementById('email');

    var EmailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (EmailValido.test(email.value)){
        alert('Email valido');
        return true;
    } else {
        alert('Email no valido');
        return false;
    }
}

