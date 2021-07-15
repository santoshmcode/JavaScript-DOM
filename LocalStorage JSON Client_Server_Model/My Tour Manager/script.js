function storeLocation() {
    let form = document.getElementById("form");

    let name = form.name.value;
    let rating = form.rating.value;
    let image = form.img.value;

    let location = {
        name,
        rating,
        image,
    };

    let array;

    array = localStorage.getItem("locations");

    if (array == null) {
        array = [];
    } else {
        array = JSON.parse(localStorage.getItem("locations"));
    }

    array.push(location);
    localStorage.setItem("locations", JSON.stringify(array));

    showLocation();
}
let data_div = document.getElementById("data");
function appendlocations(el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    let p_rating = document.createElement("p");
    let img = document.createElement("img");
    let btn = document.createElement("button");

    p_name.innerHTML = el.name;
    p_rating.innerHTML = el.rating;
    img.src = el.image;
    btn.innerHTML = "Add to Visited";
    btn.addEventListener("click", function () {
        addToVisited(el);
    });

    btn.style.display = "block";

    data_div.append(div);

    div.append(p_name, p_rating, img, btn);
}

function showLocation() {
    let data = JSON.parse(localStorage.getItem("locations"));
    data_div.innerHTML = null;
    data.forEach(function (el) {
        appendlocations(el);
    });
}

function addToVisited(obj) {
    let array;

    array = localStorage.getItem("visited");

    if (array == null) {
        array = [];
    } else {
        array = JSON.parse(localStorage.getItem("visited"));
    }

    
    array.push(obj);
    localStorage.setItem("visited", JSON.stringify(array));
}

function showVisited() {
    window.location.href = "visited.html";
}

showLocation();
