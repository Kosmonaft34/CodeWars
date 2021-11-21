//Simple Pig Latin_________________________________________________
function pigIt(str){
    let arrStr = str.split(' ')
    arrStr.forEach(el => {
        
    });
   return pigIt('Pig latin is cool');
  }
  console.log(pigIt('Pig latin is cool'));

//Decathlon World Championship
// let hundred 




 //Who likes it?__________________________________________________
//  function likes(names) {
//     if (names.length === 0) {
//       return 'no one likes this';
//     }
//     else if (names.length === 1) 
//     {
//       return ${names[0]} likes this;
//     }
//     else if ((names.length > 0) && (names.length<3))
//     {
//       return ${names[0]} and ${names[1]} like this;
//     }
//     else if ((names.length > 0) && (names.length === 3)) {
//       return  ${names[0]}, ${names[1]} and ${names[2]} like this;
//     } 
//     else if ((names.length > 0) && (names.length === 4)) {
//         return ${names[0]}, ${names[1]} and 2 others like this;
//     }
//   } 


//@ts-check
/**
 * 
 * @param {number} number*/

//Roman Numerals Encoder__________________________________________

// function solution(number){
//     const ones = number => [ '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][number]
//     const desc = number => [ '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'][number]
//     const hunds = number => [ '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'][number]
//     const mils = number => [ '', 'M', 'MM', 'MMM'][number]
      
//    let num = number.toString()
//    while(num.length < 4) num = "0" + num; //цикл добавляет нули слева   
//    let digits = num.split('').map((digits)=> +digits).slice(-4)//map перобразование в массив.slice берёт только последние цифры введённого числа
//    return mils(digits[0]) + hunds(digits[1]) + desc(digits[2]) + ones(digits[3])
// }
// console.log (solution(11));
// console.log (solution(22));
// console.log (solution(1990));
// console.log (solution(2007));



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  function filter (callback) {
//    let arr = this
//    let filteredArr = []
//    arr.forEach(el => {
//        if(callback(el)) filteredArr.push(el)
//    })
//    return filteredArr
//   }
  
//   Array.prototype.filter = filter;
//   let callback = function (num){
//       return num > 3
//     }

//   console.log([1,2,3,4].filter(callback));

//  let callback2= callback
//  console.log(typeof callback)
//  console.log(typeof callback2)
//  console.log(callback = callback2)

// console.log(callback instanceof Object);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function findEvenIndex(arr)
// {
//   for (let index = 0; index < arr.length; index++){
//     let leftSum = arr.slice(0,index).reduce((acc, el)=> acc + el, 0)
//     let rightSum = arr.slice(index +1).reduce((acc, el)=> acc + el, 0)
//     if (leftSum == rightSum)
//       return index
//   }
//   return -1
// }

// let result = findEvenIndex([1,2,3,4,3,2,1])

// console.log(result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let row = 1 //номер строки
// function numbersOfTriagle(rowsNumber, numbersInRow = 1, count = 0){ 
//     if (rowsNumber === 0) return 0
//     if(numbersInRow === rowsNumber) return count + numbersInRow
//     return numbersOfTriagle(rowsNumber, numbersInRow + 1, count + numbersInRow)
//     return result
// }

// let nums = numbersOfTriagle(row - 1)
// //формула прогрессии
// let firstNumNextRow = 1+2 * nums
// let result = (2 * firstNumNextRow + 2 *(row - 1)) * row / 2 
// console.log(result)
// let count = 0
// let rowsNum = 5
// for (let numbersInRow = 1; numbersInRow <= n; numbersInRow++) {
//     count += numbersInRow
    
// }

