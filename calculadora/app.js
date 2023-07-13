//function valores(valor) {
   // var input = document.getElementById("resultado");
    
  //  if (valor === "=") {
   //   try {
   //     var resultado = eval(input.innerText);
   //     input.innerText = resultado;
  //    } catch (error) {
    //    input.innerText = "Erro";
    //  }
   // } else if (valor === "C") {
    //  input.innerText = "";
   // } else if (valor === "CE") {
    //  input.innerText = input.innerText.slice(0, -1);
   // } else {
     // input.innerText += valor;
    //}
 // }
  /////////////////////////////////////////////

  window.onload = function() {
    var resultado = document.getElementById("resultado");
    var buttons = document.querySelectorAll(".botao");
  
    // Adiciona um evento de clique a todos os botões
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var valor = this.innerText;
        
        if (valor === "=") {
          try {
            resultado.innerText = calcularExpressao(resultado.innerText);
          } catch (error) {
            resultado.innerText = "Erro";
          }
        } else if (valor === "C") {
          resultado.innerText = "";
        } else if (valor === "CE") {
          resultado.innerText = resultado.innerText.slice(0, -1);
        } else {
          resultado.innerText += valor;
        }
      });
    }
  };
  
  function calcularExpressao(expressao) {
    var numeros = expressao.split(/\+|\-|\*|\//);
    var operadores = expressao.replace(/[0-9]|\./g, "").split("");
    
    var multiplicacaoDivisao = [];
    var resultado = parseFloat(numeros[0]);
    
    for (var i = 0; i < operadores.length; i++) {
      if (operadores[i] === "*") {
        resultado *= parseFloat(numeros[i + 1]);
      } else if (operadores[i] === "/") {
        resultado /= parseFloat(numeros[i + 1]);
      } else {
        multiplicacaoDivisao.push(resultado);
        multiplicacaoDivisao.push(operadores[i]);
        resultado = parseFloat(numeros[i + 1]);
      }
    }
    
    multiplicacaoDivisao.push(resultado);
    resultado = parseFloat(multiplicacaoDivisao[0]);
    
    for (var j = 1; j < multiplicacaoDivisao.length; j += 2) {
      if (multiplicacaoDivisao[j] === "+") {
        resultado += parseFloat(multiplicacaoDivisao[j + 1]);
      } else if (multiplicacaoDivisao[j] === "-") {
        resultado -= parseFloat(multiplicacaoDivisao[j + 1]);
      }
    }
    
    return resultado;
  }
  
  //codigo do meu amigo chatgpt