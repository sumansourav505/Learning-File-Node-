// const array=['apple','orange','','mango','','lemon'];
// const newArray=array.map((fruit)=>fruit===''?"empty string": fruit  
// )
// const copiedArray=array.slice();//slice() to copy
// console.log(copiedArray);
// const copied2Array=[...array];//spread operator to copy
// console.log(copied2Array);
// const arr=(...args)=>{
//     return args;
// }
// console.log(arr(1,2,3,4));//rest operator
// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// // if(obj2 === obj1){

// // console.log('same objects')

// // }

// // else{

// // console.log('different objects')

// // }
// console.log(obj1);
// console.log(obj2);

const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)