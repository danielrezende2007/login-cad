//VALIDAÇÃO DE PREENCHIMENTO
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert('Favor prencher todos os campos')
    }else{
       /// alert('Campos prenchidos com sucesso')
       window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES 

var dadosLista =[];

function salvarUser(){value;
    let nomeUser = document.getElementById('nomeuser').value;

    if(nomeUse){

    }else{
        alert('Favor, informar um nome');
    }
}