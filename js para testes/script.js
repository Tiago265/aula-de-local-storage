let bancodeDados= [];

function cad(){
    let usuario = document.getElementById('username').value; 
    let pos = bancodeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        bancodeDados.push(usuario.toUpperCase());
        alert("usuário cadastrado com sucesso!")
        document.getElementById('username').value = null;
    }else{
        alert("esse usuário ja foi cadastrado!")
    }
    
}

function login(){
    let usuario = document.getElementById('user').value;
    let pos = bancodeDados.indexOf(usuario);
    if(pos == -1){
        alert("usuario não encontrado")
    }
    else{
        alert("bem vindo ao sistema")
    }
}
