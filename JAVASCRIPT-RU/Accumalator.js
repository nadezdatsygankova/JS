function Accumulator(startingValue){
  this.value= startingValue;
  this.read = function(){
    this.value += +prompt('Number', 0);
  }
}

let accumulator = new Accumulator(1); 
accumulator.read();
alert(accumulator.value);
