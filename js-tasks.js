1

function oddCount(n){
    return Math.floor((n - 1) / 2);
}

console.log(oddCount(15))

2

function containsEnglish(str) {
    return str.toLowerCase().includes('english')
}

console.log(containsEnglish('Endglish'));

3

function grabDoll(dolls) {
    let bag = [];

    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
            bag.push(dolls[i]);
        }else {
            continue
        }

        if (bag.length === 2) {
            break;
        }
    }

    return bag;
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty"]))


////4

function getLength(arr) {
    return arr.length;
}

function getFirst(arr) {
    return arr[0];
}

function getLast(arr) {
    return arr[arr.length - 1];
}

function pushElement(arr, el = 1) {
    arr.push(el);  // Pushes the element to the array
    return arr.length;  // Returns the new length of the array
}

function popElement(arr) {
    arr.pop();  // Pops the last element from the array
    return arr;  // Returns the modified array
}


//5


const integrate = (coefficient, exponent) => {
    const newExponent = exponent + 1

    const newCoefficient = coefficient / newExponent

    return `${newCoefficient}x^${newExponent}`;
}

console.log(integrate(12,5))


//6

function removeDiacritics(text) {
    const diacriticMap = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    };

    let result = '';

    // Проходим по каждому символу в строке
    for (let char of text) {
        // Если символ с диакритикой, заменяем его
        if (diacriticMap[char]) {
            result += diacriticMap[char];
        } else {
            // Иначе добавляем символ как есть
            result += char;
        }
    }

    return result;
}

// Пример использования:
console.log(removeDiacritics('Jędrżęj Błądżińśki'));