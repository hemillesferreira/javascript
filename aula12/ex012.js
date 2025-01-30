let agora = new Date()
let hora = agora.getHours()
hora= parseInt(hora)
console.log(`agora sao ${hora} horas`)  
if (hora < 12 ){
    console.log('bom dia')
}else if (hora <= 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}