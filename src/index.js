module.exports = function getZerosCount(number, base) {
  if ( isSimple(base) ) {
      return zerosNumber(number, base);
  } else {
    let simpleDividers = baseToSimpleDividers(base);
    let el = simpleDividers[0];
    let min = Math.floor( zerosNumber(number, simpleDividers[0]) / countElInArray(simpleDividers[0], simpleDividers) );
    for ( let i = 1; i < simpleDividers.length; i++ ) {
      let newMin = Math.floor( zerosNumber(number, simpleDividers[i]) / countElInArray(simpleDividers[i], simpleDividers) );
      min = newMin < min ? newMin : min;
    }
    return min;
  }
  
  function countElInArray(el, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === el) {
        count++;
      }
    }
    return count;
  }

  function isSimple(base) {
      for( let i = 2; i < base; i++) {
        if (base % i === 0) {
          return false;
        }
      }
      return true;
  }

  function baseToSimpleDividers(base) {
    let dividers = [];
    let i = 2;
    while (i <= base) {
      if (base % i === 0) {
        base = base / i;
        dividers.push(i);
        i = 1;
      }
      i++;
    }
    return dividers;
  }

  function zerosNumber(number, base) {
    let count = 0;
    while (number >= base) {
      number = Math.floor(number / base);
      count = count + number;
    }
    return count;
  }
}  
