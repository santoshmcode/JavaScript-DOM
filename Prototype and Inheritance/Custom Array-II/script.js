function CustomArray(x) {
    this.length = arguments.length;
    for (let i = 0; i < this.length; i++) {
        // console.log(arguments[i]);
        this[i] = arguments[i];
    }
}

CustomArray.prototype.customPush = function (p) {
    let index = this.length;
    this[index] = p;
    this.length++;
};

CustomArray.prototype.customReverse = function () {
    let index = this.length - 1;
    let i = 0;
    let j = index;
    while (i < j) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
        i++;
        j--;
    }
};

CustomArray.prototype.arrayFormat = function () {
    let arr = [];
    let index = this.length;
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i]);
    }
    return arr
};

CustomArray.prototype.firstElement = function () {
    return this[0]
}
const myArray = new CustomArray(5, 6, 8);

myArray.customPush(35);
console.log("myArray:", myArray);

myArray.customReverse();
console.log("myArray:", myArray);

// arrayFormat() returns in array format
var array = myArray.arrayFormat();
console.log('array:', array)

// firstElement() returns first element in array
console.log(myArray.firstElement());
