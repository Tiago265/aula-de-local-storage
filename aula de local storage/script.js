const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login(){
    let login = campoLogin.value;
    let senha = campoNovaSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancodeDados = JSON.parse(localStorage.getItem("bancodeDados"));
    if(bancodeDados == null){
        mensagem = "Nenhum usuário cadastrado até o momento.";
    }else{
        for(let usuario of bancodeDados){
            if(usuario.login == login && usuario.senha == senha){
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado",JSON.stringify(usuario));
                window.location.href = "home.html"
                break;
            }
        }
    }
    alert(mensagem)
}
function cadastra(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancodeDados = JSON.parse(localStorage.getItem("bancodeDados"));
        if(bancodeDados == null){
            bancodeDados = [];
        }
    bancodeDados.push(usuario);
    localStorage.setItem("bancodeDados", JSON.stringify(bancodeDados));
    alert("usuário cadastrado com sucesso!");
    }else{
        alert("as senhas são diferentes")
    }
}
function deslogar(){
    localStorage.setItem("logado",JSON.stringify(null));
    window.location.href = "index.html";
}
function carrega(){
    let usuarioLogado = JSON.parse(localStorage.getItem("logado"));
    let nome = usuarioLogado.login;
    document.getElementById("nome").innerHTML = nome;
}