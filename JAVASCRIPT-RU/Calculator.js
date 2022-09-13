
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


//==========
function Calculator(){
  this.read= function (){
    this.number1 = +prompt('First number', 0);
    this.number2 = +prompt('Second number', 0);
  };
   this.sum= function (){
    return (this.number1 + this.number2);
  };
    this.mul= function (){
      return (this.number1 * this.number2 )
    };
}

let calculator1 =  new Calculator();
calculator1.read();
console.log("Sum:" + calculator1.sum());
console.log("Mul:" + calculator1.mul());
