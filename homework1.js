// Перевод суммы в копейки
function parseAmount(str) {
  let a = +(str.replace(',', '.'));
  console.log(a * 100);
}

parseAmount('10');
parseAmount('10,5');
parseAmount('10,55');


// Замена слова на скобки
function doThisEx(str) {
  let bracketStr = "";
  let upperStr = str.toUpperCase();
  for (let i = 0; upperStr.length > i; i++) {
    let char = upperStr.charAt(i);
    let firstI = upperStr.indexOf(char);
    let lastI = upperStr.lastIndexOf(char);
    if (firstI === lastI) {
      bracketStr += "(";
    } else {
      bracketStr += ")";

    }
  }
  console.log(bracketStr);
}


doThisEx("din");
doThisEx("recede");
doThisEx("Success");
doThisEx("(( @");
