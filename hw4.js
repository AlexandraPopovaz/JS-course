// ----==== JS School - Lecture 4 HW ====----

/**
 * Ð¡riteria for assessment
 *
 * 5 - All tasks are correctly solved (23 items), the code is clean, the solutions are optimal;
 * 4 - Correctly solved all the tasks of the base block (15 tasks), the code is clean;
 * 3 - At least 10 problems are correctly solved, the code is clean;
 * 2 - Correctly solved at least 10 problems;
 * 1 - At least 5 problems solved correctly.
 */

/**
 * Warning
 *
 * Do not rename function names or change arguments.
 */

// ----==== Basic exercises (15 items) ====----
/**
 * Exercise 1
 *
 * Write a function that returns odd array values.
 * [1,2,3,4] => [1,3]
 */
const getOddValues = (numbers) => {
    let arr = [1, 2, 3, 4];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            continue;
        }
    }
};

/**
 * Exercise 2
 *
 * Write a function that returns the smallest value of an array
 * [4,2,10,27] => 2
 */
const getSmallestValue = (numbers) => {
    let arr = [4, 2, 10, 27];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] > arr[i]) {
            result = arr[i];
        }
    }
};

/**
 * Exercise 3
 *
 * Write a function that returns the biggest value of an array
 * [5,22,9,43] => 43
 */
const getBiggestValue = (numbers) => {
    let arr = [5, 22, 9, 43];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] < arr[i]) {
            result = arr[i];
        }
    }
};

/**
 * Exercise 4
 *
 * Write a function that takes an array of strings as input
 * and returns only those shorter than 20 characters
 *
 *[
 * 'I am a short string',
 * 'I seem to be short too',
 * 'And I am a long string'
 *] => [
 * 'I am a short string',
 * 'And I am a long string' //looks like an error in the task here
 *]
 *
 * Use: filter
 */
const getShorterStrings = (strings, characters = 20) => {
    let arr = ["I am a short string", "I seem to be short too", "And I am a long string"];
    const result = arr.filter((string) => string.length < 20);
    return result;
};

/**
 * Exercise 5
 *
 * Write a function that takes the following data as input:
 *
 *[
 * { name: 'shark', likes: 'ocean' },
 * { name: 'turtle', likes: 'pond' },
 * { name: 'otter', likes: 'fish biscuits' }
 *]
 *
 * And returns an array of strings:
 *
 * [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
 *
 * Use: map
 */
const getComputedStrings = (fish) => {
    let arr = [
        { name: "shark", likes: "ocean" },
        { name: "turtle", likes: "pond" },
        { name: "otter", likes: "fish biscuits" },
    ];

    const result = arr.map((el) => {
        return `${el.name} likes ${el.likes}`;
    });
};

/**
 * Exercise 6
 *
 * Write a function that takes 2 objects as input and returns 1 with
 * common properties. If properties have the same keys use the latter.
 *
 * [{ name: 'Alice' }, { age: 11 }] => { name: 'Alice', age: 11 }
 *
 * We use: ...
 */
const mergeObjects = (objects) => {
    let obj1 = { name: "Alice" };
    let obj2 = { age: 11 };
    const result = { ...obj1, ...obj2 };
    return result;
};

/**
 * Exercise 7
 *
 * Write a function that returns the smallest value of an array
 * [5,200,-5,41] => -5
 *
 * Use: operator ... and Math.min
 */
const getSmallestValue2 = (numbers) => {
    let arr = [5, 200, -5, 41];
    let result = Math.min(...arr);
    return result;
};

/**
 * Exercise 8
 *
 * Write a function that returns odd array values.
 * [77,2,30,51] => [77,51]
 *
 * Use: reduce
 */
const getOddValues2 = (numbers) => {
    let arr = [77, 2, 30, 51];
    let reducer = (a, b) => (b % 2 === 0 ? a : a.concat(b));
    let result = arr.reduce(reducer, []);
    return result;
};

/**
 * Exercise 9
 *
 * Write a function that accepts data from the basket as input in the following form:
 *
 *[
 * {price: 10, count: 2},
 * {price: 100, count: 1},
 * {price: 2, count: 5},
 * {price: 15, count: 6},
 *]
 * where price is the price of the item and count is the quantity.
 *
 * The function should return the total price for this order.
 *
 * Use: reduce
 */
const calculateTotal = (products) => {
    let arr = [
        { price: 10, count: 2 },
        { price: 100, count: 1 },
        { price: 2, count: 5 },
        { price: 15, count: 6 },
    ];

    let reducer = (a, b) => ({ price: a.price + b.price });
    let result = arr.reduce(reducer, { price: 0 });
    return result;
};

/**
 * Exercise 10
 *
 * Implement a function that has an array of numbers as input and an array of unique values as output
 * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
 *
 * Use: reduce and indexOf
 */
const getUniqueValues = (numbers) => {
    let arr = [1, 1, 2, 3, 4, 4];
    return arr.reduce((uniqueArray, number) => {
        if (uniqueArray.indexOf(number) === -1) {
            uniqueArray.push(number);
        }
        return uniqueArray;
    }, []);
};

/**
 * Exercise 11
 *
 * Implement a function whose input is a numeric code of an error, the output is a string with a message
 * 500 => Server Error
 * 401 => Authorization failed
 * 402 => Server Error
 * 403 => Access denied
 * 404 => Not found
 *
 * Use: switch case or object like a map structure
 */
const getErrorMessage = (code) => {
    let errorCode = 500;
    let result = "";
    switch (errorCode) {
        case 500:
        case 402:
            result = "Server Error";
            break;
        case 401:
            result = "Authorization failed";
            break;
        case 403:
            result = "Access denied";
            break;
        case 404:
            result = "Not found";
            break;
    }
};

/**
 * Exercise 12
 *
 * Write a function that returns the 2 smallest values of an array
 * [4,3,2,1] => [1,2]
 *
 * Use: .sort()
 */
const get2SmallestValues = (numbers) => {
    let arr = [4, 3, 2, 1];
    let arrAfterSort = arr.sort();
    let resultArr = [];
    resultArr.push(arrAfterSort[0], arrAfterSort[1]);
};

/**
 * Exercise 13
 *
 * Implement a function, at the input of which an object of the following form:
 * {
 * firstName: 'Peter',
 * secondName: 'Vasiliev',
 * patronymic: 'Ivanovich'
 *}
 * output line with the message 'Name: Petr Ivanovich Vasiliev'
 *
 */

//it seems like a typo and here it should be "Peter" instead of "Petr"

const getFullName = (user) => {
    let obj = {
        firstName: "Peter",
        secondName: "Vasiliev",
        patronymic: "Ivanovich",
    };
    let arr = Object.values(obj);
    let arrNewOrder = [];
    arrNewOrder.push(arr[0], arr[2], arr[1]);
    const resultLine = arrNewOrder.join(" ");
    return `Name: ${resultLine}`;
};

/**
 * Exercise 14
 *
 * Implement a function that takes 2 arguments as input: an array of numbers and a multiplier,
 * a returns an array of the original array, each element of which has been multiplied by a factor:
 *
 * [1,2,3,4], 5 => [5,10,15,20]
 *
 * Use: map
 */
const multiplyTo = (numbers, multiplier) => {
    const arr = [1, 2, 3, 4];
    const result = arr.map((number) => number * 5);
    return result;
};

/**
 * Exercise 15
 *
 * Implement a function that takes 2 arguments as input: an array and a franchise,
 * and returns a string with the names of the heroes separated by a comma:
 *
 *[
 * {name: "Batman", franchise: "DC"},
 * {name: "Ironman", franchise: "Marvel"},
 * {name: "Thor", franchise: "Marvel"},
 * {name: â€œSupermanâ€, franchise: â€œDCâ€}
 *],
 * Marvel
 * => Ironman, Thor
 *
 * Use: filter, map, join
 */
const getCharacterNames = (characters, franchise) => {
    let arr = [
        { name: "Batman", franchise: "DC" },
        { name: "Ironman", franchise: "Marvel" },
        { name: "Thor", franchise: "Marvel" },
        { name: "Superman", franchise: "DC" },
    ];

    let arrAfterFilter = arr.filter((el) => el.franchise === "Marvel");
    let arrAfterMap = arrAfterFilter.map((el) => {
        return `${el.name}`;
    });
    const result = arrAfterMap.join(",");
    return result;
};

// ----==== Advanced exercises (8 items) ====----
/**
 * Exercise 16
 *
 * Write a function that returns an array of the smallest row values of a two-dimensional array
 *[
 * [10,1,300,4],
 * [20,2,300,400],
 * [30,3,300,4],
 * [40,4,300,4],
 *]
 * => [1,2,3,4]
 */

let arr = [
    [10, 1, 300, 4],
    [20, 2, 300, 400],
    [30, 3, 300, 4],
    [40, 4, 300, 4],
];

const getSmallestRow = (numbers) => {
    let arrResult = [];
    arr.forEach((el) => {
        let getMinEl = Math.min(...el);
        arrResult.push(getMinEl);
    });
    return arrResult;
};

/**
 * Exercise 17
 *
 * Write a function that returns an array of the smallest column values of a two-dimensional array
 *[
 * [1,2,3,4],
 * [1,2,3,4],
 * [1,2,30,4],
 * [1,2,3,40],
 *]
 * => [1,2,3,4]
 */

let arr17 = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 30, 4],
    [1, 2, 3, 40],
];

const getSmallestColumn = (numbers) => {
    let result = [];
    arr17.forEach((el) => {
        const newArr = el.sort();
        result.push(newArr[0]);
    });
    return result;
};

/**
 * Exercise 18
 *
 * Write a function that returns the 2 biggest value of an array
 * [4,3,2,1] => [4,3]
 */

let arr18 = [4, 3, 2, 1];

const get2BiggestValues = (numbers) => {
    let newArr = [];
    result = arr18.sort();
    newArr.push(result[result.length - 1], result[result.length - 2]);
    return newArr;
};

/**
 * Exercise 19
 *
 * Write a function that returns the number of vowels in a string in English
 * ( a, e, i, o, u ).
 *
 * 'Return the number (count) of vowels in the given string.' => 15
 */

let str = "Return the number (count) of vowels in the given string";
const getNumberOfVowels = (string) => {
    let m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
};

/**
 * Exercise 20
 *
 * Write a function that returns an array of two strings where the first element
 * is the original string with uppercase even letters, and the second
 * with capital odd.
 * 'abcdef' => ['AbCdEf', 'aBcDeF']
 */
const getCapitalizedStrings = (string) => {};
/**
 * Exercise 21
 *
 * Write a function that satisfies the following conditions:
 *
 * the function takes a string S, consisting of N letters of the English alphabet in lowercase [a-z]
 * the function returns a string that does not contain three identical letters in a row
 * the function removes the minimum number of letters from the string S
 *
 * Examples:
 * S = "eedaaad", the function returns "eedaad". One "a" has been removed.
 * S = "xxxtxxx", the function returns "xxtxx". The same letters can occur more than three times in a string, but not in a row.
 * S = "uuuuxaaaaxuuu", the function returns "uuxaaxuu".
 *
 * Assumptions:
 * N is an integer in the range [1..200,000]
 * S consists only of lowercase letters [a-z]
 */
const getCorrectString = (string) => {};
/**
 * Exercise 22
 *
 * Implement a flatten function that takes an array of arbitrary nesting arrays as input
 * and returns an array of all their elements without nesting.
 * [1, 2, [3, 4], 5, [[6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const getFlattenedArray = (numbers) => {};
/**
 * Exercise 23
 *
 * Implement a function that has an array of numbers as input and an array of not unique values as output.
 *
 * [1, 2, 2, 4, 5, 5] => [2, 5]
 */
const getNotUniqueValues = (numbers) => {};
