function merge(array){
  if (array.length === 1) return array;
  let leftArray = array.slice(0, Math.trunc(array.length/2));
  let rightArray = array.slice(Math.trunc(array.length/2));

  leftArray = merge(leftArray);
  rightArray = merge(rightArray);


  let mergeArray = []
  while(leftArray.length != 0 || rightArray.length != 0){

    if (leftArray.length === 0){
      return mergeArray.concat(rightArray);
    } else if(rightArray.length === 0){
      return mergeArray.concat(leftArray);
    }

    if (leftArray[0] < rightArray[0]){
      mergeArray = mergeArray.concat(leftArray.shift());
    } else if(leftArray[0] > rightArray[0]){
      mergeArray = mergeArray.concat([rightArray.shift()]);
    } else if(leftArray[0] === rightArray[0]){
      mergeArray = mergeArray.concat([rightArray.shift(), leftArray.shift()]);
    }
  }
}

console.log(merge([1, 3, 2, 5, -1])); //[ -1, 1, 2, 3, 5 ]
console.log(merge([1, 542, 62, 3, 5, 13, 45, 21, 2, 321, 1, 1, 4])); //[1,  1,  1,  2,  3,   4,
                                                         // 5, 13, 21, 45, 62, 321, 542]
