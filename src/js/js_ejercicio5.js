function calcular(operacion) {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const resultado = document.getElementById('resultado');

      // Validar que no estén vacíos o NaN
      if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = 'Por favor, ingresa dos números válidos.';
        return;
      }

      let res;

      switch (operacion) {
        case 'sumar':
          res = num1 + num2;
          break;
        case 'restar':
          res = num1 - num2;
          break;
        case 'multiplicar':
          res = num1 * num2;
          break;
        case 'dividir':
          if (num2 === 0) {
            resultado.textContent = 'No se puede dividir entre cero.';
            return;
          }
          res = num1 / num2;
          break;
        default:
          resultado.textContent = 'Operación no válida.';
          return;
      }

      resultado.textContent = `Resultado: ${res}`;
    }