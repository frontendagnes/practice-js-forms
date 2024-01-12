// imię required
// nazwisko required
// ulica required
// nr budynku  type number
// nr mieszkania  typ number
// kod requaierd regex pattern="[0-9]{2}-[0-9]{3}"
// miejscowość required
// województwo required

const form = document.querySelector("form");
const errorsList = document.querySelector("ul");

form.setAttribute("novalidate", true);

form & form.addEventListener("submit", handleSubmit);
// form & form.addEventListener("input", handleSubmit)
const patterns = {
  zip: /[0-9]{2}-[0-9]{3}/,
  email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
};
function handleSubmit(e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");
  const labels = form.querySelectorAll("label");

  const errors = [];
  errorsList.innerHTML = "";

  form.voivodeship.classList.remove("is-invalid");

  inputs &&
    inputs.forEach((input) => {
      input.classList.remove("is-invalid");
    });

  labels &&
    labels.forEach((label) => {
      label.classList.remove("is-invalid--label");

      const child = label.children;
      const field = child[0];

      if (field.required && field.value === "") {
        errors.push(`Pole ${label.innerText} musi zostać wypełnione`);
        field.classList.add("is-invalid");
        label.classList.add("is-invalid--label");
      }

      if (field.type === "number") {
        if (Number.isNaN(Number(field.value))) {
          errors.push(`Dane w polu ${label.innerText} powinny być liczbą`);
          field.classList.add("is-invalid");
          label.classList.add("is-invalid--label");
        }
      }

      if (field.pattern) {
        if (!patterns.zip.test(field.value)) {
          errors.push(`Pole ${label.innerText} ma zły format`);
          field.classList.add("is-invalid");
          label.classList.add("is-invalid--label");
        }
      }

      if (field.type === "email" && !patterns.email.test(field.value)) {
        errors.push(`Pole ${label.innerText} ma zły format`);
        field.classList.add("is-invalid");
        label.classList.add("is-invalid--label");
      }
    });

  if (errors.length) {
    errors.forEach((error) => {
      const liEl = document.createElement("li");
      liEl.innerHTML = error;
      errorsList.appendChild(liEl);
    });
  } else console.log("Wszystko Oki");
}
