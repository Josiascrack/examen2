var username = 'JosiasAlva';
var password = '123456';
$("#boton").click(function () { 
    var user = $("#usuario").val();
    var pass = $("#contraseña").val();
    if(user == username && pass==password){
        sessionStorage.setItem('user',user);
        window.location = 'principal.html';        
    }else{
            window.location = 'login.html';
    }

});

