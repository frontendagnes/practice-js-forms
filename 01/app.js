const form = document.querySelector("form");
const list = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = form.firstName.value;
  let surname = form.lastName.value;

  let listEl = document.createElement("li");
  listEl.innerHTML = `${name} ${surname}`;
  listEl.classList.add("users-list__person");
  list.appendChild(listEl);
});
