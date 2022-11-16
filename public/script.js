const logo = document.querySelector(".logo");
const cards = document.querySelectorAll(".card");
const expands = document.querySelectorAll(".expand");
console.log(logo);

logo.addEventListener("click", () => {
  location.href = "/";
});

[...cards].forEach((card) => {
  card.addEventListener("click", () => {
    const description = card.children[1].textContent;
    location.href = `/${description}`;
  });
});

[...expands].forEach((expand) => {
  expand.addEventListener("click", () => {
    const detail = expand.parentElement.nextElementSibling;
    detail.classList.toggle("hidden");
  });
});
