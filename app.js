const API_URL = "http://localhost:8000";

async function loadStudents() {
    const res = await fetch(`${API_URL}/students`);
    const students = await res.json();

    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.nombre}</td>
            <td>${student.apellido1}</td>
            <td><button onclick="showDetails(${student.id})">Ver más</button></td>
        `;
        tbody.appendChild(row);
    });
}

async function showDetails(id) {
    const res = await fetch(`${API_URL}/students/${id}`);
    const student = await res.json();

    const detailsTable = document.querySelector("#detailsTable");
    detailsTable.innerHTML = "";

    for (const key in student) {
        const row = document.createElement("tr");
        row.innerHTML = `<td><strong>${key}</strong></td><td>${student[key]}</td>`;
        detailsTable.appendChild(row);
    }
}

loadStudents();
