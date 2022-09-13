
let calculator = {
  number1: 0,
  number2:0,
  read(){
    this.number1 = +prompt('First number', 0);
    this.number2 = +prompt('Second number', 0);
  },
  sum(){
    return (this.number1 + this.number2);
  },
    mul(){
      return (this.number1 * this.number2 )
    }
} 

calculator.read();
console.log(calculator.number1);
console.log(calculator.number2);
let resultSum = calculator.sum();
console.log(resultSum);
let resultMul = calculator.mul();
console.log(resultMul);
