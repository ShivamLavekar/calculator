const res = document.getElementById("result");

function liveScreen(enteredValue) {
    if (!res.value) {
      res.value = "";
    }
    res.value += enteredValue;
  }

  function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      res.value = "Can't divide 0 with 0";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      res.value = calculatedValue;
    }
  }

  function backspace(value){
    const resultInput = res.value;
    res.value = resultInput.substring(0, res.value.length - 1);
  }






// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }