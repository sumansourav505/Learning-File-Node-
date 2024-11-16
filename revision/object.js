class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        return (minMark)=>{
            if(this.marks>minMark && this.age>minPlacementAge){
                console.log(`${this.name} is ready for placements`);
            }
            else{
                console.log(`${this.name} is not ready for placements`);
            }
        }

    }
}

const Suman=new Student("Suman",26,98);
const Sujit=new Student("Sujit",26,95);
Suman.setPlacementAge(18)(35);