// 1-masala MAP ORQALI
// function ConvertToString(massive) {
//    let res = massive.map(function(value){
//         if (typeof value == "String" && value.length < 5) {
//             return value.toUpperCase()
//         }
//     })
//     return res;
// }

// 1-masala FILTER ORQALI

// function onlyStringEleemnts(massive) {
//     let res = massive.filter(function(value) {
//        if (typeof value == "string" && value.length < 5) {
//         return value.toUpperCase()
//        }
//     })
//     return res
// }

// 2-masala // FIND ORQALI

// function overTWenty(massive) {
//     let res = massive.find(function(talaba) {
//       return massive.age > 20;
//     });
  
//     if (res) {
//       return res.name.toUpperCase();
//     } else {
//       return null;
//     }
//   }

// 3-masala

// function sumIfNumberIsBig(arr) {
//     let sum = 0;
// let res = arr.filter(function(value){
// if (value > 10000) {
//     sum += value;
// }
// })
// return sum;
// }

// 4-masala

// function MusbatvaYuzdankattaBolsa(arr) {
//     let res = arr.every(function(value){
//        return value > 0
//     })

//    let res2 = arr.some(function(value){
//      return value > 100
//    })
  
//    if (res) {
//     console.log("Musbat sonlar mavjud");
//    } else console.log("Manfiy sonlar ham mavjud ");
   
//    if (res2) {
//     console.log("100 dan katta son mavjud ");
//    }
//    return [res, res2];
// }

// 5-masala

// function KvadratiniHisoblabYangiMAssivgaOlish(arr) {
//     let res = arr.map(function(value){
//         return value ** 2
//     })
//     function MassivniChiqar(arr) {
//         arr.forEach(function(value){
//             console.log(value);
//         })
//     }
//     return res
// }

// 6-masala

// function calculatedSalary(arr) {
//     let res = arr.map(function(value){
//         if (value >= 200) {
//             return Math.trunc(value+(value * 10 / 100))
//         } return value
//     })
//     return res
// }

// 7-masala

// function findTheStudent(arr) {
//     let res = arr.find(function(value){
//         return value.grade < 80
//     })
//     let res2 = arr.filter(function(value){
//             return value.name.toUpperCase()
//     }) 
//     return [res,res2]
// }

// Stringga oid masalalar

// 1-masala

// function LetterUppercase(arr) {
//     for (let i = 0; i< arr.length; i++) {
//         if (typeof arr[i] == "string") {
//             arr[i].toUpperCase()
//         }
//     }
//     return arr
// }

// 2-masala

// function checkIfSubstringIsHere(text, substring) {
//     return text.includes(substring);
// }

// 3-masala

function convertJAvascriptToJs(massive) {
    for (let i = 0; i < massive.length; i++) {
        if (massive[i] == "Javascript") {
            massive[i] == 'JS'
        } else {
            massive[i]
        }
    } 
    return massive
}
let arr = [1,2,3,4,5,5,6,6,5,"Javascript"];
console.log(convertJAvascriptToJs(arr));





















  







