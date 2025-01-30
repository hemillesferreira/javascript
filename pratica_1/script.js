function carregar(){
    let msg = window.document.getElementById('msg')
    let img= window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =  `Agora sao ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#FFD700';
        //bom dia
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#FF8C00';
    }else{
        //boa noite
        img.src= 'imagens/noite.jpeg'
        document.body.style.background = '#191970';
    }
}