function slideshow() {
    const array = [
        "https://images.unsplash.com/photo-1626285851440-141f5a95c462?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1626276115308-ed088602994b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1626196874981-40349a369168?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ];

    let div = document.getElementById("slideshow");

    let img = document.createElement("img");

    img.src = array[0];
    let i = 1;

    div.append(img);

    setInterval(function () {
        if (i === array.length) {
            i = 0;
        }
        img.src = array[i];
        i++;
    }, 3000);
}

slideshow();

const students = [
    {
        name: "Student1",
        attendece: 99,
        img: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
        name: "Student2",
        attendece: 92,
        img: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
        name: "Student3",
        attendece: 88,
        img: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
        name: "Student4",
        attendece: 100,
        img: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
        name: "Student5",
        attendece: 99,
        img: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
        name: "Student6",
        attendece: 65,
        img: "https://www.w3schools.com/w3images/avatar2.png",
    },
];

if (localStorage.getItem("students") === null) {
    let studentsData = JSON.stringify(students);
    localStorage.setItem("students", studentsData);
}



function showStudents(d) {
    let students = d

    let student_data = document.getElementById("student-data");

    students.forEach(function (el) {
        let div = document.createElement("div");
        student_data.append(div);
        let name = document.createElement("p");
        let attendece = document.createElement("p");
        let img = document.createElement("img");

        div.append(name, attendece, img);
        name.innerHTML = el.name;
        attendece.innerHTML = el.attendece;
        img.src = el.img;
    });
}

showStudents(JSON.parse(localStorage.getItem("students")));

function sortLTH() {
    let students = JSON.parse(localStorage.getItem("students"));

    students.sort(function (a, b) {
        return a.attendece - b.attendece;
    });

    let student_data = document.getElementById("student-data");
    student_data.innerHTML = null;
    showStudents(students); //sorted student data
}


function sortHTL() {
    let students = JSON.parse(localStorage.getItem("students"));

    students.sort(function (a, b) {
        return b.attendece - a.attendece;
    });

    let student_data = document.getElementById("student-data");
    student_data.innerHTML = null;
    showStudents(students); //sorted student data
}
