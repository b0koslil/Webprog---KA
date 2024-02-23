function oddOnesOut(arr) {
    const countMap = {};
    
    arr.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });
    
    return arr.filter(num => countMap[num] % 2 === 0);
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3])); 
console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3])); 
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26])); 
console.log(oddOnesOut([1, 2, 3])); 
console.log(oddOnesOut([1])); 
