const logoImg = document.querySelector(".logo");
const cards = document.querySelectorAll(".card");
const expands = document.querySelectorAll(".expand");
const confirmBets = document.querySelectorAll('.confirm-bet')

logoImg.addEventListener("click", () => {
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
    const allDetail = document.querySelectorAll('.detail-bet');

    allDetail.forEach(el => {
      el.classList.add('hidden')
    })

    const detail = expand.parentElement.nextElementSibling;
    detail.classList.remove('hidden')
});
});

confirmBets.forEach(confirm => {
  confirm.addEventListener('click', () => {
    const right = document.querySelector('.right');
    const betName = confirm.parentElement.previousElementSibling.children[1].innerHTML;
    console.log(betName)
  })
})
