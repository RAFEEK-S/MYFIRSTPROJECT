

const engineer = {
    name:"Rafeek",
    age:34,
    qualification:"B.E Chemical engg",
    yearofpassedout:2012,
    tech:() => {
        return  "hello world"; 
    }
}

// console.log("engineer name:", engineer.name)
// console.log("engineer age:", engineer.name)
// console.log("engineer qualification:", engineer.qualification)
// console.log("engineer passed out year:", engineer.yearofpassedout)
// console.log("engineer function name:", engineer.tech())

for(let key in engineer){
    console.log("instructor" , key , ":", engineer[key]);
}