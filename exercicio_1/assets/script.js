function procurarPalavra() {
    var nomes = ['Andre', 'Thaisa', 'Lavinia', 'Rebeca']
    data = document.getElementById("id_search").value;
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === data) {
            document.getElementById("id_busca").innerText = 'Palavra encontrada.';
            setTimeout(limparPalavra, 4000);
            return null
        } else {
            document.getElementById("id_busca").innerText = 'Palavra não encontrada.';
            setTimeout(limparPalavra, 4000);
            return null
        }
    }
}
function limparPalavra() {
    document.getElementById("id_search").value = '';
    document.getElementById("id_busca").innerText = '';
}




