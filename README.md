# Node-Bootcamp-003


## foreach

```
const names = ["Anushka", "Dissanyaka", "Seneth", "Sirimal"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

function printItem(name) {
  console.log(name);
}

names.forEach(printItem);

names.forEach((name) => {
  console.log(name);
});

```


##map, filter

```
let numbers = [1, 2, 3, 4, 5, 6, 7];

function square(number) {
  if (number % 2 === 0) return number;
}

numbers = numbers.filter(square);
console.log(numbers);

```

## reduce
```
let numbers = [1, 2, 3, 4, 5, 6, 7];

let max = numbers.reduce((max, curr) => {
  if (curr > max) return curr; // sum + curr
}, 0);

let total = numbers.reduce((sum, curr) => sum + curr, 0);

let total2 = numbers.reduce((sum, curr) => {
  return sum + curr;
}, 0);
```