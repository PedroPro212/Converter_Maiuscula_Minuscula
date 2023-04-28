function Escolher(checkboxClicado){
    var chcMai = document.querySelector('#chcMaiuscula');
    var chcMin = document.querySelector('#chcMinuscula');
    var chcManter = document.querySelector('#chcManter');
    

    if (checkboxClicado === chcMai && checkboxClicado.checked) {
        chcMin.checked = false;
        chcManter.checked = false;
    } else if (checkboxClicado === chcMin && checkboxClicado.checked) {
        chcMai.checked = false;
        chcManter.checked = false;
    } else if(checkboxClicado === chcManter && checkboxClicado.checked){
        chcMai.checked = false;
        chcMin.checked = false;
    }
};

function Converter(){
    var txtEntrada = document.querySelector('#txtTexto').value;
    var txtSaida = document.querySelector('#txtConvertido');
    var chcMai = document.querySelector('#chcMaiuscula');
    var chcMin = document.querySelector('#chcMinuscula');
    var chcManter = document.querySelector('#chcManter');

    if(chcMai.checked === false && chcMin.checked === false && chcManter.checked === false){
        swal('Deve ser marcado alguma opção para ser convertido!');
    }
    else{
        if(chcMai.checked === true){
            txtSaida.value = txtEntrada.toUpperCase();
            txtSaida.disabled = false;
            console.log(txtSaida);
        }
        else if(chcMin.checked === true){
            txtSaida.value = txtEntrada.toLowerCase();
            txtSaida.disabled = false;
            console.log(txtSaida);
        }
        else if(chcManter.checked === true){
            function lowercaseWords(txtEntrada) {
                var palavras = txtEntrada.split(" ");
                for (var i = 0; i < palavras.length; i++) {
                  if (i !== 0 && palavras[i].length > 0) {
                    palavras[i] = palavras[i][0].toLowerCase() + palavras[i].substr(1);
                  }
                }
                var textoFormatado = palavras.join(" ");
                textoFormatado = textoFormatado.replace(/(\.\s[a-z])/g, function(match) {
                  return match.toUpperCase();
                });
                return textoFormatado;
              }

            txtSaida.value = lowercaseWords(txtEntrada);
            txtSaida.disabled = false;
            //console.log(textoFormatado);
        }
    }
}