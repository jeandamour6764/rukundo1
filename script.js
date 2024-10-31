alert('test')
let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 28, 64,70,100];
let smallest = arra[0];
let largest = arra[0];

for (let i = 1; i < arra.length; i++) {
    if (arra[i] < smallest) {
        smallest = arra[i];
    }
    if (arra[i] > largest) {
        largest = arra[i];
    }
}

console.log("Smallest number:", smallest); 
console.log("Largest number:", largest);
  let array1=[1,2,3,4,5]
  let array2=[1,2,3,4,5]
  
  
  console.log("array1:", array1)
  console.log("array2:",array2)
