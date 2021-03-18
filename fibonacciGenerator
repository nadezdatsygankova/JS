function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    let arr=[];
    if (n === 0)
    {
      return arr;
    }
    if (n === 1)
    {
      return arr=[0];
    }
    else if (n == 2)
    {
      return arr=[0,1];
    }
    else{
      arr=[0,1];
      for(let i=0;i<n-2;i++)
      {
        arr[i+2]= arr[i]+arr[i+1];
      }
      return arr;
    }
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

let result=fibonacciGenerator (8);
console.log(result);
