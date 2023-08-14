const directions = [
    "Starting point: Ironhack Paris",
    "← Head northwest on Bd Voltaire toward Rue Léon Frot",
    "← Turn left onto Rue Chanzy",
    "* Café Titon, 34 Rue Titon, 75011 Paris, France"
  ];
   
  function obtainDirections(step) {
    return new Promise ( (resolve, reject) => {
      setTimeout(() => {
        console.log( directions[step] );
   
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
      }, 2000); 
      
    })
  }
   
  async function getCoffee() {
    try {
      await obtainDirections(0);
      await obtainDirections(1);
      await obtainDirections(2);
      await obtainDirections(3);
      await obtainDirections(3);
      
      
      console.log("You arrived at your destination!");
    } catch(err) {
      console.log(err)
    } 
  }
   
  getCoffee();


  function superAdd(num1,num2,cb) {
    ...
  }
  