function ABC(String) {
    return String.charCodeAt(0)
}

function CHAR(Ascii) {
    return String.fromCharCode(Ascii)
}

var chave = "Phsi3j5hH5Sih455S345sf5HNPhsi3j5hH5dSih455S345sf5HN"

function cript() {
    var dados = document.getElementById("0").value
    var p = 0
    var len
    var texto = ""

    for(var i = 0; i < dados.length; i++) {
        p++
        len = (ABC(dados.substr(i,1)) + ABC(chave.substr(p,1)))

        if(p == 50){
        p = 1
        }
        if (len > 255) {
            len -= 256
        }
        texto += (CHAR(len))
    }
    document.getElementById("1").value = texto
}

function desCript() {
    var dados = document.getElementById("1").value
    var p = 0
    var len
    var texto = ""

    for(var i = 0; i < dados.length; i++) {
        p++
        len = (ABC(dados.substr(i,1)) - ABC(chave.substr(p,1)))
        
        if(p == 50){
            p = 1
                    }
        if (len < 0) {
            len += 256
        }
        texto += (CHAR(len))
    }
    document.getElementById("2").value = texto;
}

function limparTela() {
    for(var i = 0; i < 3; i++) {
        document.getElementById(i).value = ""
    }
}