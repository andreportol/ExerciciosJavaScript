let input_senha = document.getElementById("id_senha");
input_senha.addEventListener("keyup", contarSenha);


function contarSenha(event) {
    // A variável senha recebe o valor do campo input_senha.
    let senha = event.target.value
    if (senha.length < 7) {
        document.getElementById("mostrarResultado").style.color = "red";
        document.getElementById("mostrarResultado").innerText = "Senha curta";
    } else {
        document.getElementById("mostrarResultado").style.color = "yellow";
        document.getElementById("mostrarResultado").innerText = "Senha de tamanho adequado.";
    }
}

function mostrarNome() {
    let nome = document.getElementById("id_campoNome").value;
    document.getElementById("mostrarNome").innerHTML = "Parabéns pelo cadastro, <strong>" + nome + "</strong>."
}