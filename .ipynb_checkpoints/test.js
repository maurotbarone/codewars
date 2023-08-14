str='xxhuyyYYOooOOOjggh';
let countx = 0;
      let county = 0;
        const strSPlit=str.split('');
console.log(strSPlit)
    
        // looping through the items
        for (let letter in strSPlit) {
    
            if (strSPlit[letter] ==='O') {
                countx += 1
                console.log(countx)
            }
        }

        

console.log(countx)