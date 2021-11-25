//The observed PIN_____________________________________
/** @param {string} observed */
function getPINs(observed) {
    let variants = {
        '0' : ['0', '8'],              //для 0
        '1' : ['1', '2', '4'],          //для 1
        '2' : ['1','2', '3', '5'],          //2
        '3' : ['2', '3', '6'],          //3
        '4' : ['1', '4', '5', '7'],     //4
        '5' : ['2', '5', '6', '8'],     //5
        '6' : ['3', '5', '6', '9'],     //6
        '7' : ['4', '7', '8'],          //7
        '8' : ['5', '7', '8', '9', '0'],//8
        '9' : ['6', '8', '9']          //9

    }
    function cartesian(arrays) {
        const result = [];
        // функция, которая будет рекурсивно вызываться
        // глубина рекурсии равна arrays.length
        // в процессе рекурсии функция будет создавать часть элемента декартова произведения
        // в конце рекусрии функция добавит созданный элемент в массив result
        const recursion = (tuplePart) => {
            if (tuplePart.length === arrays.length) {
                result.push(tuplePart);
            } else {
                const array = arrays[tuplePart.length];
                for (const element of array) {
                    // создаём копию tuplePart и добавляем в неё очередной элемент
                    const tuplePartWithNewElement = tuplePart.concat([element]);
                    recursion(tuplePartWithNewElement);
                }
            }
        };
        recursion([]);
        return result;
    }
    
     const sets = observed.split('').map(digit=>{
         return variants[digit]
     })
     return cartesian(sets).map(comb =>{
         return comb.join(' ')
     })
  }
 console.log(getPINs('369'));
// let deadline = new Date('Dec 1 2021 00:00:00'); 
//         function counts() { 
//             let now = new Date() 
//             let gap = deadline - now; 
//             let days = Math.floor(gap / 1000 / 60 / 60 / 24); 
//             let hours = Math.floor(gap / 1000 / 60 / 60) % 24; 
//             let min = Math.floor(gap / 1000 / 60) % 60; 
//             let sec = Math.floor(gap / 1000) % 60; 
//             document.getElementById("days").innerText = days; 
//             document.getElementById("hours").innerText = hours; 
//             document.getElementById("min").innerText = min; 
//             document.getElementById("sec").innerText = sec; 
//         } 
//         const createClock = setInterval(counts, 1000); 


// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

//Greed is Good_________________________________________________
/** @param {number[]} dice */
// function score(dice){
//     let diceCount = Array(6).fill(0)//[0,0,0,0,0,0] сколько раз выпало то или иное значение кубиков кости
//     let triplePoints = [1000, 200, 300, 400, 500, 600]
//     let singlePoints = [100, 0, 0, 0, 50, 0]
//     dice.forEach(score => {
//         diceCount[score -1] ++//индексы с 1
//          } )
//          let result = diceCount.map((count, index) => {
//             return count > 2 ?
//              triplePoints[index] + singlePoints[index] * (count - 3) : //: - это или 
//              singlePoints[index] *count
//          }).reduce((acc, el) => acc + el)
//          return result
// }

// console.log(score([2, 3, 4, 6, 2]));// 0
// console.log(score([4, 4, 4, 3, 3]));// 400
// console.log(score([5, 1, 3, 4, 1]));// 250
// console.log(score([1, 1, 1, 3, 1]));// 1100
// console.log(score([2, 4, 4, 5, 4]));// 450


//Moving Zeros To The End______________________________________
// var moveZeros = function (arr) {
//          let arrWithoutNull = arr.filter(el => el !== 0) //выкидываем нули
//          return arrWithoutNull.concat(Array(arr.length - arrWithoutNull.length).fill(0))//берем длинну массива начального отнимаем длину отфильтрованного массива получается 4 и добавляем нули
//   }
//   console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));


/**@param {string} str */
//Simple Pig Latin_________________________________________________
// function pigIt(str){
//     return str.split(/\s+/)//разбиваем на слова
//     .map(word =>{
//         return /^[!.,-?]$/.test(word) ? word : //[]находим знаки препинания, тестом проверяем что совпадает
//         word.substring(1) + word.charAt(0) + 'ay'
//     }).join(' ')
//   }
//   console.log(pigIt('Pig latin is cool'));
 
//Decathlon World Championship___________________________________
// const pTable = 
// { '100m': { A: 25.4347, B: 18, C: 1.81 },
//   'Long jump': { A: 0.14354, B: 220, C: 1.4 },
//   'Shot put': { A: 51.39, B: 1.5, C: 1.05 },
//   'High jump': { A: 0.8465, B: 75, C: 1.42 },
//   '400m': { A: 1.53775, B: 82, C: 1.81 },
//   '110m hurdles': { A: 5.74352, B: 28.5, C: 1.92 },
//   'Discus throw': { A: 12.91, B: 4, C: 1.1 },
//   'Pole vault': { A: 0.2797, B: 100, C: 1.35 },
//   'Javelin throw': { A: 10.14, B: 7, C: 1.08 },
//   '1500m': { A: 0.03768, B: 480, C: 1.85 } } 

//   var athletes = {
//     "Bob": {"100m": 12.3, "Long jump": 530, "Shot put": 9.4, "High jump": 160, "400m": 59.6, "110m hurdles": 19.2, "Discus throw": 23, "Pole vault": 270, "Javelin throw": 19, "1500m": 300.5 },
//     "Fred": {"100m": 11.9, "Long jump": 500, "Shot put": 9.4, "High jump": 150, "400m": 59.6, "110m hurdles": 19.2, "Discus throw": 19, "Pole vault": 320, "Javelin throw": 19, "1500m": 295.5 }
//   }

//       function decathlon(athletes){
//         //INT(A(B-P)^C)
//        const timePoints = (a,b,c,p) => Math.round(a* Math.pow(b-p, c)) 
//         //INT(A(P-B)^C)
//        const scorePoints = (a,b,c,p) => Math.round(a* Math.pow(p-b, c))
//        Object.keys(athletes).forEach(athleteName => {
//            console.log(athleteName + ':');
//            console.log(athletes[athleteName]);
//         //1.через фор проверить сколько атлетов учавствует
//         //2.и здесь же перебрать каждого по ключам 
//         //3. передать значения в формулу
//         //4. посчитать результат каждого 
//         //5. сравнить и вывести победителя 
//        })
//     }
//     console.log (decathlon());
      
 

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

