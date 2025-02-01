function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano =  document.getElementById('txtano')
    let res = document.getElementById ('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        let fsex = document.getElementsByName('radsexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute ('idD', 'foto')
        if(fsex[0].checked){
            genero =  'Homem'
            if(idade >= 0 && idade < 10 ){
                //crinca
            }  else if (idade > 10){
                 //crianca
            }else if (idade < 50){
                 //adulto
            }  else{
                //idoso
            }
               
          
        }else if (fsex[1].checked){
            genero= 'Feminino'
            f(idade >= 0 && idade < 10 ){
                //crinca
            }  else if (idade > 10){
                 //crianca
            }else if (idade < 50){
                 //adulto
            }  else{
                //idoso
            }
               

        }
        res.innerHTML = `detectamos ${genero} com ${idade}`
    }
}