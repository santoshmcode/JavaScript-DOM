const CustomArray = function (x) {
    for (var i = 0; i < arguments.length; i++) {
        this[`${i}`] = arguments[i];
    }
    this.length = arguments.length;
};

let myArray = new CustomArray(56, 66, 98, 65, 88);
console.log("myArray:", myArray);
console.log("myArray.length", myArray.length);

let myArray2 = new CustomArray(22, 112, 100)
console.log('myArray2:', myArray2)
