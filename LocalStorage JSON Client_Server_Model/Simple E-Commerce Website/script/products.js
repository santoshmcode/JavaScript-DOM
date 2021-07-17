let allProducts = document.getElementById("all-products");
let productList = JSON.parse(localStorage.getItem("productList"));
let cartNumber = document.getElementById("cart-number");


let cart = [];
if (localStorage.getItem("cart") === null) {
    cart = []
} else {
    let cart = JSON.parse(localStorage.getItem("cart"))
}


productList.forEach(function (el) {
    let productDiv = document.createElement("div");
    let productImg = document.createElement("img");
    let productName = document.createElement("h2");
    let productPrice = document.createElement("p");
    let addCart = document.createElement("button");

    productImg.src = el.img;
    productName.innerHTML = el.name;
    productPrice.innerHTML = el.price;
    addCart.setAttribute("id", el.id)

    addCart.innerHTML = "Add To Cart";
    addCart.addEventListener("click", function (event) {
        //tracking a single product
        let element = productList[event.srcElement.id - 1];
        
        //checking is product alrady exists in the cart
        let exist = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == element.id) {
                exist = true;
                break;
            }
        }
        if (exist) {
            alert("Product is already added to cart");
        } else {
            cart.push(element);
            alert("added to cart");
            cartNumber.innerHTML = cart.length
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        
    });

    allProducts.append(productDiv);
    productDiv.append(productImg, productName, productPrice, addCart);
});




