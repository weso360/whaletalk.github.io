const input = "udemy or codecademy";

let vowels = ["a", "e", "i", "o", "u"];

let resultArray = []

for (let i = 0; i < input.length; i++) {
  //console.log(`inputIndex is ${i}`);
  if(input[i] === "e"){
  resultArray.push(input[i]);

}
 if(input[i] === "u"){
  resultArray.push(input[i]);

}

  for (let v = 0; v < vowels.length; v++)
    //console.log(`inputIndex is ${v}`);

  if (input[i] === vowels[v]) {
      resultArray.push(input[i])
    }
}

const resultString = resultArray.join(' ').toUpperCase();
      console.log(resultString)
