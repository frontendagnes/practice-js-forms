const form = document.querySelector("form");
const errorsList = document.querySelector(".errors");

function handleSubmit(e) {
  e.preventDefault();

  errorsList.innerText = "";

  const errors = {
    error: [],
    fields: [],
  };

  const labels = document.querySelectorAll("label");

  labels &&
    labels.forEach((label) => {
      label.style.color = "black";
    });

  if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      form.formLogin.value
    )
  ) {
    errors.error.push("Adres e-mail ma nie poprawną formę");
    errors.fields.push(form.formLogin.previousElementSibling);
  }

  if (form.formPass1.value.length < 6) {
    errors.error.push("Hasło powinno zawierać co najmniej 6 znaków");
    errors.fields.push(form.formPass1.previousElementSibling);
  }

  if (form.formPass1.value !== form.formPass2.value) {
    errors.error.push("Wpisałeś różne hasła");
    errors.fields.push(form.formPass2.previousElementSibling);
  }

  if (form.formAccept.checked === false) {
    errors.error.push("Nie zaakceptowałeś regulaminu");
    errors.fields.push(form.formAccept.previousElementSibling);
  }

  if (errors.fields.length !== 0) {
    errors.fields.forEach((field) => {
      field.style.color = "red";
    });
  }

  if (errors.error.length !== 0) {
    errors.error.forEach((error) => {
      const liEL = document.createElement("li");
      liEL.innerHTML = error;
      errorsList.appendChild(liEL);
    });
  } else {
    console.log("DONE");
  }
}

form.addEventListener("submit", handleSubmit);
