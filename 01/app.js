const submit = document.querySelector("input[type=submit]");

const fristName = document.querySelector('[name="firstName"]');
const lastName = document.querySelector('[name="lastName"]');

const list = document.querySelector("ul");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const name = fristName.value;
  const surname = lastName.value;

  let listEl = document.createElement("li");
  listEl.innerHTML = `${name} ${surname}`;
  listEl.classList.add("users-list__person");
  list.appendChild(listEl);
});
