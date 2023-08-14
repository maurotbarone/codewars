
const products= ["Computer", "Cell Phones", "Vacuum Cleaner"]
const amounts= [3, 24, 8]
const prices= [199, 299, 399]



function top3(products, amounts, prices) {
    array=[];
    revenue=0;
    products.map((element,i)=>{
       
            obj= {
                products:products[i],
                revenue:(amounts[i] * prices[i])
            }
        
            array.push(obj) 
        

        });
    
    const orderedMovie= array.sort(function(a,b){
        a.revenue-b.revenue;
    })
    
    return orderedMovie.filter()
    
}

console.log(top3(products,amounts,prices))
