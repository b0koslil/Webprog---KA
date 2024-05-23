document.getElementById('betoltesgomb').addEventListener('click', load);
document.getElementById('new').addEventListener('submit', createCourse);
document.getElementById("kereses").addEventListener("input", search);

function search() {
    let src = document.getElementById("kereses").value.toLowerCase();
    let courses = document.querySelectorAll("#list > li");

    courses.forEach(course => {
        let courseName = course.firstChild.textContent.toLowerCase();
        let stringList = course.querySelector('ul');
        let students = stringList.querySelectorAll('li');

        if (!src) {
            course.style.display = "block";
            students.forEach(student => {
                student.style.display = "block";
            });
        } else {
            if (courseName.includes(src)) {
                course.style.display = "block";
                students.forEach(student => {
                    student.style.display = "block";
                });
            } else {
                let result = false;
                students.forEach(student => {
                    let studentName = student.textContent.toLowerCase();
                    if (studentName.includes(src)) {
                        student.style.display = "block";
                        result = true;
                    } else {
                        student.style.display = "none";
                    }
                });

                course.style.display = result ? "block" : "none";
            }
        }
    });
}

async function load() {
    document.getElementById("betoltes").style.display = "block";

    try {
        let response = await fetch('https://vvri.pythonanywhere.com/api/courses');
        let data = await response.json();
        let list = document.getElementById('list');
        list.innerHTML = '';

        data.forEach(course => {
            let li = document.createElement('li');
            li.innerHTML = '(' + course.id + ') ' + course.name;
            let stringList = document.createElement('ul');
            course.students.forEach(student => {
                let stringLi = document.createElement('li');
                stringLi.textContent = '(' + student.id + ') ' + student.name;
                let editB = document.createElement('button');
                editB.textContent = 'Szerkesztés';
                editB.onclick = () => editStudent(student.id, student.name, course.id);
                let deleteB = document.createElement('button');
                deleteB.textContent = 'Törlés';
                deleteB.onclick = () => deleteStudent(student.id);
                stringLi.appendChild(editB);
                stringLi.appendChild(deleteB);
                stringList.appendChild(stringLi);
            });
            let addStudentC = document.createElement('input');
            addStudentC.type = "text";
            addStudentC.placeholder = "Új diák hozzáadása";
            let addStudentButton = document.createElement('button');
            addStudentButton.textContent = "Diák hozzáadása";
            addStudentButton.onclick = () => addStudent(course.id, addStudentC.value);
            li.appendChild(stringList);
            li.appendChild(addStudentC);
            li.appendChild(addStudentButton);
            list.appendChild(li);
        });
    } catch (error) {
        console.log('Hiba történt: ' + error);
    } finally {
        document.getElementById("betoltes").style.display = "none";
    }
}

async function createCourse(event) {
    event.preventDefault();

    let courseNameInput = document.getElementById('courseName');
    let courseName = courseNameInput.value;

    try {
        let response = await fetch('https://vvri.pythonanywhere.com/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: courseName })
        });
        await response.json();
        load();
        courseNameInput.value = ''; 
    } catch (error) {
        console.log('Hiba történt: ' + error);
    }
}

async function addStudent(courseId, studentName) {
    try {
        let response = await fetch(`https://vvri.pythonanywhere.com/api/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: studentName, course_id: courseId })
        });
        await response.json();
        load();
    } catch (error) {
        console.log('Hiba történt: ' + error);
    }
}

async function editStudent(studentId, currentName, courseId) {
    let newName = prompt("Adja meg a diák új nevét:", currentName);

    if (newName) {
        try {
            let response = await fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: newName, course_id: courseId })
            });
            await response.json();
            load();
        } catch (error) {
            console.log('Hiba történt: ' + error);
        }
    }
}

async function deleteStudent(studentId) {
    if (confirm("Törölni szeretné ezt a diákot?")) {
        try {
            await fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
                method: 'DELETE'
            });
            load();
        } catch (error) {
            console.log('Hiba történt: ' + error);
        }
    }
}
