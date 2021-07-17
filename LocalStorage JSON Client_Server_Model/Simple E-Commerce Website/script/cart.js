let checkout = document.getElementById("checkout");

let cart = JSON.parse(localStorage.getItem("cart"));

let number = document.getElementById("number")
number.innerHTML = cart.length;

let total = document.getElementById("total")

let sum = 0
cart.forEach(function (e) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");
    let price = document.createElement("p");

    img.src = e.img;
    name.innerHTML = e.name;
    price.innerHTML = e.price;

    checkout.append(div);
    div.append(img, name, price);

    sum += (e.price / 1)
    total.innerHTML = sum;
});

function applyPromo() {
    let promoCode = document.getElementById("promo").value
    if (promoCode === "MASAI30") {
        
        let n99 = document.getElementById("n99")
        let del = document.createElement("del")
        let price = total.innerHTML/1;
        del.innerHTML = total.innerHTML;
        n99.append(del)

        total.innerHTML = price - (price * 0.3)
        alert("Promo Code applied")

    } else {
        alert("Invalid Promo Code");
    }
}

function done() {
    window.location.href = "success.html"
}

