function getLongestSequence(number) {
    let binaryOfNumber = getBinary(number);
    let sequences = binaryOfNumber.replace(/^0+/, "").split(/1/).filter((input) => input != "");
    if(sequences.length > 1) {
      return sequences.reduce((max, seq) => {
        if(seq) {
          return (seq.length > max) ? seq.length : max;
        }
      }, 0);
    } 
    return 0;
}

function getBinary(number) {
    let result = "";
    while(number > 0){
        number = ~~(number / 2);
        let remainder = number % 2;
        result += remainder.toString();
    }
    return result;
}

console.log(getLongestSequence(5));