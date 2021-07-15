
let data_div = document.getElementById("data");
function appendlocations(el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    let p_rating = document.createElement("p");
    let img = document.createElement("img");

    p_name.innerHTML = el.name;
    p_rating.innerHTML = el.rating;
    img.src = el.image;
    
    data_div.append(div);

    div.append(p_name, p_rating, img);
}

function showVisited() {
    let data = JSON.parse(localStorage.getItem("visited"));
    data_div.innerHTML = null;
    data.forEach(function (el) {
        appendlocations(el);
    });
}
showVisited();
