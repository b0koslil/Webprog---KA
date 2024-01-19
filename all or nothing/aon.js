
function canScore100(key, answers) {
    for (let i = 0; i < key.length; i++) {
      if (key[i] !== "_" && key[i] !== answers[i]) {
        return false;
      }
    }
    
    return true;
  }

  console.log(canScore100(["A", "_", "C", "_", "B"], ["A", "D", "C", "E", "B"])); 
  console.log(canScore100(["B", "_", "B"], ["B", "D", "C"])); 
  console.log(canScore100(["T", "_", "F", "F", "F"], ["F", "F", "T", "T", "T"])); 
  console.log(canScore100(["B", "A", "_", "_"], ["B", "A", "C", "C"])); 
  console.log(canScore100(["A", "B", "A", "_"], ["B", "A", "C", "C"])); 
  console.log(canScore100(["A", "B", "C", "_"], ["B", "A", "C", "C"])); 
  console.log(canScore100(["B", "_"], ["C", "A"])); 
  console.log(canScore100(["B", "A"], ["C", "A"])); 
  console.log(canScore100(["B"], ["B"])); 
  console.log(canScore100(["_"], ["B"])); 
  