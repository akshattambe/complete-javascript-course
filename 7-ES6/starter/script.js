// const years = [1982, 1987, 2016, 1957, 1947];
//
// let ages = years.map((items, index, years) => 2020 - items);
// console.log(ages);
//General function for console.log()
function print(msg){
    console.log(msg);
}
//////////////////////////////////////////////////////////
// PRACTICING ARRAY AND LOOP
//////////////////////////////////////////////////////////

// Que 1 :  Find how many times true appears in the below array.
//          If array is empty return 0.

/*var arr = [true, true, false, true, false];

function countTrue(arr) {
    let count = 0;
    if (arr.length  > 0) {
        for (var x of arr) {
            if(x){
                count++;
            }
        }
    }else{
        return 0;
    }
    return count;
}

console.log(countTrue(arr));

 */

// Que 2 :  Destructuring an array arr given below array.
/*const arr = [1, 2, 3, 4, 5, 6]
const [a,b,c,d,e,f] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// Destructuring an simple object.
var person = {
    fname: 'akshat',
    lname: 'tambe'
}
const {fname: aa, lname :bb } = person;
console.log(aa);
console.log(bb);

 */

// Que 3 :  Write a function to reverse an array.
/*
const arr = [1, 2, 3, 4];

function reverse(arr){
    let revArr = [];
    if(arr.length > 0){
        for(let i = 1; i <= arr.length; i++ ){
            revArr[arr.length - i] = arr[i-1];
        }
    }else{
        return 0;
    }
    return revArr;
}

console.log(reverse(arr));

 */

// Que4 :  Create a function that takes an array of numbers or letters and returns a string.
// ex   :   arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

/*
let arr = [1, 2, 3, "a", "s", "dAAAA"];


function arrayToString(arr) {
    let str='';
    if(arr.length > 0){
        for( x of arr){
            if((typeof(x)).includes('number')){
                x = x.toString();
            }else if((typeof(x)).includes('boolean')){
                x = x.toString();
            }
            str += x;
        }
    }else{
        return 0;
    }
    return str;
}

console.log(arrayToString(arr));

 */

// Que5 :   Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// ex   :   minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
/*
let arr = [14, 6, 7, 35, 1, 34, 54];
function minMax(arr) {
    let arr2 = arr.sort(function (a,b){return a-b});
    return [arr2[0], arr2[arr2.length-1]]
}
console.log(minMax(arr));

 */

// ** An array is special, if every even index contains an even number and every odd index contains an odd number.
// Que6 :   Create a function that returns true if an array is special, and false otherwise.
// ex   :   isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
//          Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
/*
var arr = [2, 7, 4, 9, 6, 1, 6, 3];
function isSpecialArray(arr) {
    if(arr.length > 0){
        let evenCount = 0;
        let oddCount = 0;
        let evenArr = [];
        let oddArr = [];
        print(arr);
        for(let i = 0; i < arr.length; i++){
            if(((i%2) === 0) && ((arr[i]%2) === 0)){
                evenArr[evenCount] = arr[i];
                //print('Even items : ' + evenArr[evenCount]);
                evenCount++;
            }else if(((i%2) !== 0) && ((arr[i]%2) !== 0)){
                oddArr[oddCount] = arr[i];
                //print('Odd items : ' + oddArr[oddCount]);
                oddCount++;
            }else{
                print('false');
                return false;
            }
        }
    }else{
        print('false');
        return false;
    }
    return true;
}
print(isSpecialArray(arr));

 */


// Que7 :   Create a function that concatenates n input arrays, where n is variable.
// ex   :   concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//          concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
/*
function concat(...args) {
    let newArr = [];
    if (args.length > 0) {
        for (x of args) {
            if (x.length > 0) {
                for (t of x) {
                    newArr.push(t);
                }
            } else {
                continue;
            }
        }
    } else {
        return [];
    }
    print('New array length after concatenation is : ' + newArr.length);
    return newArr;
}

print(concat([1], [2], [3], [4], [5], [6], [7]));
*/


//Trick Question : Can you guess the output of the below code?
//Delete will delete the object property, but will not reindex the array or update its length. This makes it appears as if it is undefined:
//array.splice(start, deleteCount) actually removes the element, re-indexes the array, and changes its length.

let array = [34,12, 2];
print(array.length);
print(array);

array.splice(2, 1);
print(array.length);
print(array);
print(array[1]);

delete array[1];
delete array[1];
print(array);
print(array[1]);
print(array.length);





