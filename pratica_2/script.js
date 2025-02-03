function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
        return; // Sai da função para evitar erro
    }

    let fsex = document.getElementsByName('radsex');
    let idade = ano - Number(fano.value);
    let genero = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
        genero = 'homem';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'crianca.jpg');
        } else if (idade < 21) {
            img.setAttribute('src', 'homen_jovem.jpg');
        } else if (idade < 50) {
            img.setAttribute('src', 'homem_adulto.jpg');
        } else {
            img.setAttribute('src', 'velho.jpg');
        }
    } else if (fsex[1].checked) {
        genero = 'mulher';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', '.manina_crianca.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'mulher_jovem.jpg');
        } else if (idade < 50) {
            img.setAttribute('src', 'mulher_adulta.jpg');
        } else {
            img.setAttribute('src', 'mulher_velha.jpg');
        }
    } else {
        window.alert('[ERRO] Selecione o gênero!');
        return;
    }

    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
}
