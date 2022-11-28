function contarVogais() {
    let contador = 0;
    const lista_vogais = ['a', 'e', 'i', 'o', 'u']; // lista de vogais
    const elemento = document.getElementById("inputPalavra").value.split('');
    
    for (let i = 0; i < elemento.length; i++) {
        if (lista_vogais.includes(elemento[i])) {
            contador++;
        }
    }
    document.getElementById("id_contadorVogais").innerHTML = contador;
}
