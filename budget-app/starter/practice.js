/* for each array method

let arr = [1,2,3,4];

arr.forEach(function(element){
    console.log(element);
});


//array map() method. Creates a new array

var array = [1,2,3,4];
var newArr = array.map(function(num) {
    console.log(this); //returns the window obj
    //returns NaN if this.num
    return num * 2;
});

/* array should be defined before
var array = [1,2,3,4]; //undefined
const array = [1,2,3,4]; //map won't work since arr was initialised after


//Mapping an array of numbers to an array of sqaure roots

var arr = [20, 4, 18];

let roots = arr.map(function(num) {
    return Math.sqrt(num);
});


let kvArray = [{key: 1, value: 10},
                {key: 2, value: 20},
                {key: 3, value: 30}]

let reformattedArray = kvArray.map(function(obj) {
let rObj = {}
rObj[obj.key] = 'val ' + obj.value
return rObj;
});

console.log(reformattedArray);
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]


//Borrow map method from array prototype. assign it to call
let map = Array.prototype.map;
let a = map.call('Hello World', function(x) {
    return x.charCodeAt(0);
});

console.log(a);

console.log(["1", "2", "3", "4", "5"].map(parseInt)); //o/p - 1, NaN, NaN

console.log(parseInt("2", 1)); //NaN
console.log(parseInt("2", 2));//NaN
console.log(parseInt("3", 2)); //NaN
console.log(parseInt("6", 5)); //NaN
console.log(parseInt(7, "10"));
console.log(parseInt("11", 10));

let xs = ['10', '10', '10']
xs = xs.map(parseInt)
console.log(xs)
*/
