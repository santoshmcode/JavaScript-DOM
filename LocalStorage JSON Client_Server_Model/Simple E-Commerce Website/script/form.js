let form = document.getElementById("product-form");

let productList = [
    {
        name: "Vivo V21 5G",
        price: "29990.00",
        img: "https://images-na.ssl-images-amazon.com/images/I/61KmcwI8TFS._SL1200_.jpg",
        id: 1,
    },
    {
        name: "OnePlus Nord CE 5G",
        price: "27999.00",
        img: "https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg",
        id: 2,
    },
    {
        name: "realme 8 5G",
        price: "15278.00",
        img: "https://images-na.ssl-images-amazon.com/images/I/41QHt1HYUBS.jpg",
        id: 3,
    },
    {
        name: "Apple iPhone 12 Pro Max",
        price: "159900.00",
        img: "https://images-na.ssl-images-amazon.com/images/I/71umuN8XVeL._SL1500_.jpg",
        id: 4,
    },
    {
        name: "Mi 11X Pro 5G",
        price: "39999.00",
        img: "https://images-na.ssl-images-amazon.com/images/I/716FVMg72GS._SL1500_.jpg",
        id: 5,
    },
];

localStorage.setItem("productList", JSON.stringify(productList));
let id = productList.length + 1;
function addProduct() {
    let productName = form.name.value;
    let productPrice = form.price.value;
    let productImg = form.img.value;

    let product = {
        name: productName,
        price: productPrice,
        img: productImg,
        id: id,
    };

    id++;
    if (product.name !== "" && product.price !== "" && product.img !== "") {
        productList = JSON.parse(localStorage.getItem("productList"));
        productList.push(product);
        localStorage.setItem("productList", JSON.stringify(productList));
        alert("Product Added To List");
    } else {
        let errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML =
            "Invalid Product. Please Fill correct Information!!!";
    }
}
