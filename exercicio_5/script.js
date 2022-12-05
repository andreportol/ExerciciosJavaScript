function verificarSenhas(){
    let senha1 = document.getElementById("id_senha1").value;
    let senha2 = document.getElementById("id_senha2").value;
    console.log(senha1)
    console.log(senha2)
    if(senha1 == senha2){
        alert("Senhas conferem!")
    }else{
        alert("Senhas não conferem!")
    }
}