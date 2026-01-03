//objects:
const a = {
    age:23
}

b = a;
a.age = 100;
console.log(a)  // here it will go to the reference and change the value;


console.log(typeof []);

const sorted = [100,150,50,200];

const result = sorted.sort((a,b)=>a-b);
console.log(result);
