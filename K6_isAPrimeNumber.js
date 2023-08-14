function isPrime(num) {
    s=Math.sqrt(num)
    if (num<=1) return false
    for (let i=2;i<=s;i++){
        if (num%i===0)return false 
    }
    return true
  }

  console.log(isPrime(-1))  //false
  console.log(isPrime(1))   //false
  console.log(isPrime(1000000009))  //true