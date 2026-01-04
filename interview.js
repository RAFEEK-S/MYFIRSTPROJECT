//objects:
const a = {
  age: 23,
};

b = a;
a.age = 100;
console.log(a); // here it will go to the reference and change the value;

// typeof:
console.log(typeof []);

const sorted = [100, 150, 50, 200];

const result = sorted.sort((a, b) => a - b);
console.log(result);

// for loop in words:
const strings = "leetcode";

for (let i = 0; i < strings.length; i++) {
  console.log(strings[i]);
}

// problem from leetcode
function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "e") {
      console.log(-1);
    } else console.log(i); // put console to understand..
  }
}
firstUniqChar("leetcode");
