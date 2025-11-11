document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector(".studentsTable tbody");
    const students = JSON.parse(localStorage.getItem("students")) || [];
  
    tableBody.innerHTML = "";
  
    students.forEach(s => {
      const birth = new Date(s.birthDate);
      const age = new Date().getFullYear() - birth.getFullYear();
      const endYear = s.startYear + 4;
  
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${s.lastName} ${s.firstName} ${s.middleName}</td>
        <td>${s.faculty}</td>
        <td>${birth.toLocaleDateString()} (${age} лет)</td>
        <td>${s.startYear}-${endYear}</td>
      `;
      tableBody.appendChild(tr);
    });
  });
  
