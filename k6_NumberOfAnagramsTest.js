
function anagramCounter (wordsArray) {
    let counter=1;
    let word=[];
    let otherWord=[];

    for (let i=0; i<wordsArray.length; i++){
        
        for (let j=i+1; j<wordsArray.length; j++){

            word= wordsArray[i].split('')
            otherWord= wordsArray[j].split('')

            
                if ((word.sort().toString())===(otherWord.sort().toString())) {
                    counter=counter+1;
                }
        }   
        // wordsArray.shift()
    }
  
    return counter;
  }
  
  array=["dell", "ledl", "abc", "cba", "bca", "bac"]
  console.log(anagramCounter(array))

    
  
  
  
 
