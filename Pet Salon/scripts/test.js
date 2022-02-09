let names = ["Victoria","Mark","Mike","Phil"];
let mixed = [99,"Derek",true,null,45,"Hello"];

function displayNames(){
    for(let i=0;i<names.length;i++){
        console.log(names[i]);   
    }
}
//displayNames();

let ages = [55,45,23,34,55,78];
//travel the ages array
function displayAge(){
    for(let i=0;i<ages.length;i++){
        console.log(ages[i]);   
    }
}
//displayAge();

//object literal

let student={
    name:"Joey",
    age:80,
    student:true,
    grade:"A-",
    music:["Eminem","Coldplay","Rolling stones"],
    address:{
        city:"San Diego",
        country:"USA"
    }
}

console.log(student.address.country);//USA
console.log(student.music[0]);
console.log(student["music"][0]);

let students=[
    {
        name:"Guillermo",
        age:24,
        activeStudent:true
    },
    {
        name:"Arturo",
        age:23,
        activeStudent:true
    },
    {
        name:"Mark",
        age:30,
        activeStudent:false
    }
]

console.log(students[0]);
