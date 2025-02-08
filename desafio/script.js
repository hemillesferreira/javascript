let num = document.querySelector('input#textnum')
let lista = document.querySelector('select#numadd')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista  (n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
   if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML= ''
   }else{
    window.alert('Valor Invalido ou ja encontrado na lista')
   }
   num.value= ''
   num.focus()
}
function finalizar(){
    if( valores.length == 0){
        window.alert('Adicione valores antes de Finalizar')
    }else{
        let tot =  valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo tempo ${tot} numeros cadastrados</p>`
    }
}
