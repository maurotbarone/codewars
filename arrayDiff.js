function arrayDiff(a, b) {
   
   return a.filter((number) => number=!(b.indexOf(number)>-1))
   }
   

console.log (arrayDiff([1,2,2,3,4],[2,3]))
