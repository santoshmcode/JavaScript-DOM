let queue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
let vaccineNumber = document.getElementById("count");
let totalPersonCount = document.getElementById("total-persons");
let count = vaccineNumber.innerHTML / 1;

count = 10;
totalPersonCount.innerHTML = queue.length;

function register() {
    let age = document.getElementById("age").value;
    const name = document.getElementById("name").value;

    if (age > 60) {
        queue.unshift(name);
    } else {
        queue.push(name);
    }
    totalPersonCount.innerHTML = queue.length;

    let message = `${name} your registeration is done. wait for  your turn`;

    alert(message);

    let promise = new Promise(function (resolve, reject) {
        setInterval(function () {
            if (queue[0] === name) {
                resolve(`${name}, go take vaccine`);
            }
        }, 1000);
    });

    promise.then(function (res) {
        alert(res);
    });

    function setVaccination() {
        queue.shift();
        totalPersonCount.innerHTML = queue.length;
        count--;
        vaccineNumber.innerHTML = count;
        if (count === 0) {
            alert("vaccine out of stock, visit tomorrow");
            clearInterval(interval);
        }
        console.log("queue:", queue);
        if (queue.length === 0) {
            clearInterval(interval);
        }
    }
    let interval = setInterval(setVaccination, 2000);
}
