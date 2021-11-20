//@ts-check
/**
 * 
 * @param {number} number 
 */
function solution(number){

  let digits = number.toString().split('').map((digits)=> +digits).slice(-4)//map перобразование в массив.slice берёт только последние цифры введённого числа
  console.log(digits);
}
solution(1000)
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

