
function getAverage(arr) {

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = Math.floor(sum / arr.length);
    
    return average;
  }
  
  console.log(getAverage([1, 2, 3, 4, 5])); 
  console.log(getAverage([5, 10, 15, 20]));   
  console.log(getAverage([8, 2, 7, 6]));     
  