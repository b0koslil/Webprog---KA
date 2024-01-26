
function swapHeadTail(arr) {

    const midpoint = Math.ceil(arr.length / 2);
  
    const head = arr.slice(0, midpoint);
    const tail = arr.slice(midpoint);

     if (arr.length % 2 == 1) {
      tail.push(head.pop());
    }
  
    const result = tail.concat(head);

    return result;
  }
  
  console.log(swapHeadTail([1, 2, 3, 4, 5])); 
  console.log(swapHeadTail([-1, 2]));           
  console.log(swapHeadTail([1, 2, -3, 4, 5, 6, -7, 8])); 
  


  
