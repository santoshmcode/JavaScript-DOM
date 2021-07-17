let array = [5, 4, 3, 2, 1];
let a = 2;
let p = new Promise(function (resolve, reject) {
    let i = 0;
    let interval = setInterval(function () {
        
        console.log('a:', a)
        if (a == array[i]) {
            resolve("Success");
        } else {
            reject("Failed");
        }
        i++;
        if (i > 4) {
            clearInterval(interval);
        }
    }, 1000);
});
console.log("p:", p);
let newInterval = setInterval(function () {
    p.then(function (x) {
        console.log(x);
    });
    
}, 1000);
clearInterval(newInterval);
