function aumentaBraco(){
    let valor = document.getElementById("braco");
    if (valor.value < 10 && valor.value >=0){
        valor.value = parseInt(valor.value) + 1;
    }
}
function diminuiBraco(){
    let valor = document.getElementById("braco");
    if (valor.value <= 10 && valor.value >0){
        valor.value = parseInt(valor.value) - 1;
    }
}
function aumentaBlindagem(){
    let valor = document.getElementById("blindagem");
    if (valor.value < 10 && valor.value >=0){
        valor.value = parseInt(valor.value) + 1;
    }
}
function diminuiBlindagem(){
    let valor = document.getElementById("blindagem");
    if (valor.value <= 10 && valor.value >0){
        valor.value = parseInt(valor.value) - 1;
    }
}
function aumentaNucleo(){
    let valor = document.getElementById("nucleo");
    if (valor.value < 10 && valor.value >=0){
        valor.value = parseInt(valor.value) + 1;
    }
}
function diminuiNucleo(){
    let valor = document.getElementById("nucleo");
    if (valor.value <= 10 && valor.value >0){
        valor.value = parseInt(valor.value) - 1;
    }
}
function aumentaPerna(){
    let valor = document.getElementById("perna");
    if (valor.value < 10 && valor.value >=0){
        valor.value = parseInt(valor.value) + 1;
    }
}
function diminuiPerna(){
    let valor = document.getElementById("perna");
    if (valor.value <= 10 && valor.value >0){
        valor.value = parseInt(valor.value) - 1;
    }
}
function aumentaFoguete(){
    let valor = document.getElementById("foguete");
    if (valor.value < 10 && valor.value >=0){
        valor.value = parseInt(valor.value) + 1;
    }
}
function diminuiFoguete(){
    let valor = document.getElementById("foguete");
    if (valor.value <= 10 && valor.value >0){
        valor.value = parseInt(valor.value) - 1;
    }
}

var robos = ["img/robotron-amarelo.png", "img/robotron-azul.png", "img/robotron-branco.png", "img/robotron-preto.png", "img/robotron-rosa.png", "img/robotron-vermelho.png"];
var i = 1;
function direita(){
    let robo = document.getElementById("robo")
    if (i == 5){
        i = -1;
    }if (i < 5 && i >= -1){
        i += 1;
        robo.setAttribute('src', robos[i]);
    }
}
function esquerda(){
    let robo = document.getElementById("robo")
    if (i == 0){
        i = 6;
    }if (i <= 6 && i >= 1){
        i -= 1;
        robo.setAttribute('src', robos[i]);
    }
}
