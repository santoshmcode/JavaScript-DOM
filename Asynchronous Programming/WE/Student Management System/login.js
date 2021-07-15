const admin = [
    {
        username: "admin",
        password: "password",
    },
    {
        username: "admin2",
        password: "password",
    },
    {
        username: "admin3",
        password: "password",
    },
];

if (localStorage.getItem("admin") === null) {
    let adminData = JSON.stringify(admin)
    localStorage.setItem("admin", adminData)
}

function getData(e) {
    e.preventDefault();
    let form = document.getElementById("login-form")

    let username = form.username.value;
    let password = form.password.value;

    const admins = JSON.parse(localStorage.getItem("admin"))
    for (let i = 0; i < admins.length; i++){
        let uName = admins[i].username;
        let pWord = admins[i].password;

        if (uName == username && pWord == password) {
            window.location.href = "home.html"
            break
        }
    }

}