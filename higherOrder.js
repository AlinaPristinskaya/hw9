function myFilterFunction(array, test){
    const filteredArray=[]
for (const el of array) {
    const passed=test(el);
    if(passed){
        filteredArray.push(el)
    } 
}
    return filteredArray
}


const callback=function (el) {
 return el.length===6
   
} 

console.log(    myFilterFunction([
    "elephant",
    "banana",
    "orange",
    "computer",
    "apple",
    "giraffe",
    "cucumber",
    "strawberry",
    "watermelon",
    "blueberry"
],callback));

;