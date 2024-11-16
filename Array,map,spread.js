array=['apple','orange','','mango','','lemon'];
newArray=array.map((fruit)=>fruit===''?"empty string": fruit  
)
console.log(newArray);