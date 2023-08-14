function XO(str) {
        let countO = 0;
        let countX = 0;
        const strSplit=str.split('')
    
        // looping through the items
        for (let letter in ) {
    
            if (strSplit[letter] ==('O')||strSplit[letter] ==('o')) {
                countO += 1
                
            }
            if (strSplit[letter] ==('X')||strSplit[letter] ==('x')) {
                countX+= 1;
            }
        }
        
return `numbers of o= ${countO}, numbers of x= ${countX}`


        
}
console.log(XO('xxhuyyYYOOOoXojgXgh'))


