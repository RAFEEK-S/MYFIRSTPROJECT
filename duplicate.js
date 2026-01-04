var arr = ["A23", "B56", "B56", "C79", "D16"];
var filtered = [];

for (let i = 0; i < arr.length; i++) {
    if(filtered.includes(arr[i])){
        console.log("already there:" + arr[i])
    }else filtered.push(arr[i])
  
}

console.log(filtered);// put console after for loop then only you will get results
