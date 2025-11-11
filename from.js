const form = document.getElementById("studentForm");
const errorsDiv = document.getElementById("errors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorsDiv.textContent = "";

  const student = {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    middleName: form.middleName.value.trim(),
    birthDate: form.birthDate.value,
    startYear: parseInt(form.startYear.value),
    faculty: form.faculty.value.trim()
  };

  const errors = [];
  const now = new Date();
  const birth = new Date(student.birthDate);

  if (!student.firstName || !student.lastName || !student.middleName || !student.birthDate || !student.startYear || !student.faculty) {
    errors.push("Все поля обязательны для заполнения.");
  }

  if (birth < new Date("1900-01-01") || birth > now) {
    errors.push("Дата рождения должна быть между 1900 и текущей датой.");
  }

  if (student.startYear < 2000 || student.startYear > now.getFullYear()) {
    errors.push("Год начала обучения должен быть между 2000 и текущим годом.");
  }

  if (errors.length > 0) {
    errorsDiv.innerHTML = errors.join("<br>");
    return;
  }

  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  alert("Студент успешно добавлен!");
  window.location.href = "index.html";
});
