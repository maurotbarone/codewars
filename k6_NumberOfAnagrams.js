
function anagramCounter (wordsArray) {

  let counter=0;

    for (let i=0; i<wordsArray.length; i++){
        
        for (let j=i+1; j<wordsArray.length; j++){

            if ((wordsArray[i].split('').sort().join(''))===(wordsArray[j].split('').sort().join(''))){
                counter++
            }
        }   
    }
  
    return counter;
  }
  
  array=["dell", "ledl", "abc", "cba", "bca", "bac"]
  console.log(anagramCounter(array))