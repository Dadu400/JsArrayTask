// pirvelidavaleba

let array = [5, 10, -2, -4, 5, -9, -15, 20, -60, -150, -42, 4, -5]
let arrayNew = []

for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        arrayNew.push(array[i])
    }
}

console.log(arrayNew)

// meoredavaleba

let mixarray = [true, false, true, false, 5, 7, 2, 4, 5, 6, 6, 8, 4, 1, 1, "nika", "nika", "kaxa"];
let arraynew = [];

for (let i = 0; i < mixarray.length; i++) {
  if (!arraynew.includes(mixarray[i])) {
    arraynew.push(mixarray[i]);
  }
}

console.log(arraynew);

// // mesamedavaleba

let arrayone = [1, 5, 3, 6, 7, 76, 54, 65, 89, 1, 3, 99, 23, 46, 61]
let even = []
let odd = []

for (let i = 0; i < arrayone.length; i++){
    if (arrayone[i] % 2 === 0) {
        even.push(arrayone[i])
    } else {
        odd.push(arrayone[i])
    }  
}

console.log(even);
console.log(odd);