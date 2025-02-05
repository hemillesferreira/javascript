function calcular(){
    let contador = document.getElementById('cont').value;
    contador = parseInt(contador)
    let fim = document.getElementById('txfim').value;
    fim = parseInt(fim)
    let passo = document.getElementById('txtpasso').value;
    passo = parseInt(passo)
    while(contador<= fim){
        contador++
    }
}
