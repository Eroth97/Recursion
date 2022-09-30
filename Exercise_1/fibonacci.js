//Non recursive version.
function fibs(n){
  let fibArray = [];
  for (let i = 0; i < n; i++){
    if (i === 0){
      fibArray.push(0);
    } else if(i === 1){
      fibArray.push(1);
    } else{
      fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
  }
  return fibArray;
}

//Recursive version.
function fibsRec(n){
  return n === 1? [0]: n === 2? [0, 1]: fibsRec(n-1).concat([fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]);
};
console.log(fibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibsRec(8));