function orderedCount(word){
    arrayFromString=word.split('')

    const filteredArray =arrayFromString.filter(function(ele ,pos){
        return arrayFromString.indexOf(ele)==pos;})

    filteredArrayOFArray=filteredArray.map(function(item) {
            return [item];
    });

let target=0  
 for (i=0; i=<arrayFromString.length; i++)
    target = filteredArray[i];

let counter = 0;
for (value of filteredArray) {
  if (value == target) {
        counter++;
    }
};



console.log(counter);

return arrayFromString

}
let string='abracadabra'
console.log(orderedCount(string))






// const arr = ['a', 'b', 'a', 'a', 'c', 'c'];
// 
// const count = {};
// 
// for (const element of arr) {
//   if (count[element]) {
    // count[element] += 1;
//   } else {
    // count[element] = 1;
//   }
// }


// const filteredArray =arrTwo.filter(function(ele ,pos){
    // return arrTwo.indexOf(ele)==pos;})
    // console.log("The filtered array ",filteredArray);
