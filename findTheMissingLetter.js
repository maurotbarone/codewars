function findMissingLetter(array)
{
    const firstLetter=array[0]
    let alphabet;

    if (firstLetter === firstLetter.toUpperCase()){
        alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    }
    else {alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')}

    const startIndex = alphabet.indexOf(firstLetter)
    let n=0
    
    for (let i =startIndex; i<alphabet.length; i++ )
        if (alphabet[i] != array[n]) {
            return alphabet[i]
        }
        else {++n}

}

console.log(findMissingLetter(['a','b','c','f']))
console.log(findMissingLetter(['A','B','C','F']))