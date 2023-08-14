
let twoSum = (numbers, target) => {
    let newNumbers = {},
      results = []

        for (let i = 0; i < numbers.length; i++){
            if (newNumbers[numbers[i]]){
                console.log(newNumbers[numbers[i]])
                results.push([newNumbers[numbers[i]], numbers[i]])
                console.log(numbers[i])
            }else{
                newNumbers[target - numbers[i]] = numbers[i];
            }
          }
          return results;
    }
console.log(twoSum([10,20,10,40,50,60,70,30],50));
console.log(twoSum([1, 2, 3], 4))





