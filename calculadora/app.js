function valores(valor) {
    var input = document.getElementById("resultado");
    
    if (valor === "=") {
      try {
        var resultado = eval(input.innerText);
        input.innerText = resultado;
      } catch (error) {
        input.innerText = "Erro";
      }
    } else if (valor === "C") {
      input.innerText = "";
    } else if (valor === "CE") {
      input.innerText = input.innerText.slice(0, -1);
    } else {
      input.innerText += valor;
    }
  }
  