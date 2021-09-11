exports.add = function(num1,num2) {
  return num1 + num2;
}

exports.min = function(array) {
  let minValue = array[0];

  for (const value of array) {
    if (value < minValue) {
      minValue = value;
    }
  }

  return minValue;
}

