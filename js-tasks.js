// 1
//
// function oddCount(n){
//     return Math.floor((n - 1) / 2);
// }
//
// console.log(oddCount(15))
//
// 2
//
// function containsEnglish(str) {
//     return str.toLowerCase().includes('english')
// }
//
// console.log(containsEnglish('Endglish'));
//
// 3
//
// function grabDoll(dolls) {
//     let bag = [];
//
//     for (let i = 0; i < dolls.length; i++) {
//         if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
//             bag.push(dolls[i]);
//         }else {
//             continue
//         }
//
//         if (bag.length === 2) {
//             break;
//         }
//     }
//
//     return bag;
// }
//
// console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty"]))
//
//
// ////4
//
// function getLength(arr) {
//     return arr.length;
// }
//
// function getFirst(arr) {
//     return arr[0];
// }
//
// function getLast(arr) {
//     return arr[arr.length - 1];
// }
//
// function pushElement(arr, el = 1) {
//     arr.push(el);  // Pushes the element to the array
//     return arr.length;  // Returns the new length of the array
// }
//
// function popElement(arr) {
//     arr.pop();  // Pops the last element from the array
//     return arr;  // Returns the modified array
// }
//
//
// //5
//
//
// const integrate = (coefficient, exponent) => {
//     const newExponent = exponent + 1
//
//     const newCoefficient = coefficient / newExponent
//
//     return `${newCoefficient}x^${newExponent}`;
// }
//
// console.log(integrate(12,5))
//
//
// //6
//
// function removeDiacritics(text) {
//     const diacriticMap = {
//         'ą': 'a',
//         'ć': 'c',
//         'ę': 'e',
//         'ł': 'l',
//         'ń': 'n',
//         'ó': 'o',
//         'ś': 's',
//         'ź': 'z',
//         'ż': 'z'
//     };
//
//     let result = '';
//
//     // Проходим по каждому символу в строке
//     for (let char of text) {
//         // Если символ с диакритикой, заменяем его
//         if (diacriticMap[char]) {
//             result += diacriticMap[char];
//         } else {
//             // Иначе добавляем символ как есть
//             result += char;
//         }
//     }
//
//     return result;
// }
//
// // Пример использования:
// console.log(removeDiacritics('Jędrżęj Błądżińśki'));


// const obj = { a: 1, b: 2, c: 3 };
//
//
// for (key in obj) {
//     console.log(key);
// }


///7

// function calculateTip(amount, rating) {
//
//     rating = rating.toLowerCase()
//
//     const tips = {
//         "terrible": 0,
//         "poor": 5,
//         "good": 10,
//         "great": 15,
//         "excellent": 20
//     };
//
//
//     if (tips.hasOwnProperty(rating)) {
//         return Math.ceil(amount * (tips[rating]) / 100)
//     } else {
//         return "Rating not recognised";
//     }
// }
//
// console.log(
//     calculateTip(100, 'Excellent')
// )


///8


// const arrowFunc = function(arr) {
//     return arr.map((el) => String.fromCharCode(el)).join(''); //Complete this function
// }
//
//
// const numbers = [72, 101, 108, 108, 111];
// console.log(arrowFunc(numbers))


////9

// function describeAge(age) {
//     return age <= 12 ? `You're a(${age}) kid` : age >= 13 && age <= 17 ? `You're a(${age}) teenager` : age >= 18 && age <= 64 ? `You're a(${age}) adult` : `You're a(${age}) elderly`
// }
//
// console.log(describeAge(80))