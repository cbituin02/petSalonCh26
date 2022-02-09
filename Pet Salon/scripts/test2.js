//object literal
let lion = {
    name:"Simba",
    kingOfJungle:true,
    food:"Carnivore"
}
let lion2 ={
    name:"Nala",
    kingOfJungle:false,
    food:"Carnivore"
}

//object constructor
function Animal(name,kingOfJungle,food){
    this.name=name;
    this.kingOfJungle=kingOfJungle;
    this.food=food;
    this.hunger=10;
    this.feed=function(){
        console.log("Feeding...");
        this.hunger=this.hunger-2;
    }
}
//create objects
let lionC = new Animal(name,true,"Carnivore");
console.log(lionC.feed());

//create a constructor and one object
//school,student,instructor,assignment,courses,exam
