// Obtendo referências aos elementos da calculadora
const display = document.getElementById('display');
const buttons = document.getElementsByClassName('btn');

// Variáveis de controle
let num1 = '';
let num2 = '';
let operator = '';

// Função para atualizar o display
function updateDisplay(value) {
  display.textContent = value;
}

// Função para realizar cálculos
function calculate() {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  let result = 0;

  switch (operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
  }

  updateDisplay(result);
  num1 = result.toString();
  num2 = '';
  operator = '';
}

// Adicionando event listeners aos botões
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    const value = buttons[i].getAttribute('data-value');

    if (!isNaN(value) || value === '.') {
      // Se o valor for um número ou ponto decimal
      if (operator === '') {
        num1 += value;
        updateDisplay(num1);
      } else {
        num2 += value;
        updateDisplay(num2);
      }
    } else if (value === 'C') {
      // Se o valor for 'C' (limpar)
      num1 = '';
      num2 = '';
      operator = '';
      updateDisplay('0');
    } else if (value === '=') {
      // Se o valor for '=' (igual)
      if (num1 !== '' && num2 !== '' && operator !== '') {
        calculate();
      }
    } else {
      // Se o valor for um operador
      operator = value;
    }
  });
}
