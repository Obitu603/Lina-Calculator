let calculateDisplay = '';
    let resultDisplay = '';

    function updateDisplay() {
      document.getElementById('calculate').innerText = calculateDisplay;
      document.getElementById('result').innerText = resultDisplay;
    }

    function tapNum(num) {
      calculateDisplay += num;
      updateDisplay();
    }

    function tapOperator(operator) {
      calculateDisplay += operator;
      updateDisplay();
    }

    function tapFunction(func, param = '') {
      if (param) {
        calculateDisplay = `${func}(${calculateDisplay}, ${param})`;
      } else {
        calculateDisplay = `${func}(${calculateDisplay})`;
      }
      updateDisplay();
    }

    function tapClear() {
      calculateDisplay = '';
      resultDisplay = '';
      updateDisplay();
    }

    function tapDel() {
      calculateDisplay = calculateDisplay.slice(0, -1);
      updateDisplay();
    }

    function tapResult() {
      try {
        resultDisplay = eval(calculateDisplay);
      } catch {
        resultDisplay = 'Error';
      }
      updateDisplay();
    }