const array=['apple','orange','','mango','','lemon'];
newArray=array.map((fruit)=>fruit===''?"empty string": fruit  
)
copiedArray=array.slice();//slice() to copy
console.log(copiedArray);
copied2Array=[...array];//spread operator to copy
console.log(copied2Array);