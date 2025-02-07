let num =  [5,8,2,9,3]
num [5] = 6
num.push(7) //adicionar elemntos ao vetor
num.length //ver quantos elementos tem o vetor
num.sort() //ordernar numeos vetores
//console.log(`nosso vetor é o ${num}`)
let pos = num.indexOf(4)
if (pos == -1 ){
    console.log(`o valor nao foi encontrado`)
}else{
    console.log(`o valor 8 esta na posicao ${pos}`)
}

