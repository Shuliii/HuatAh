const logoImg = document.querySelector(".logo");
const cards = document.querySelectorAll(".card");
const expands = document.querySelectorAll(".expand");
const confirmBets = document.querySelectorAll(".confirm-bet");

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
  expand.addEventListener("click", (e) => {
    const detail = expand.parentElement.nextElementSibling;
    const allDetail = document.querySelectorAll(".detail-bet");

    if (!detail.classList.contains("hidden")) {
      detail.classList.add("hidden");
    } else {
      allDetail.forEach((el) => {
        el.classList.add("hidden");
        detail.classList.remove("hidden");
      });
    }

    // const detail = expand.parentElement.nextElementSibling;
    // detail.classList.toggle("hidden");
    // const allDetail = document.querySelectorAll(".detail-bet");

    // allDetail.forEach((el) => {
    //   if (el !== e.target.parentElement.nextElementSibling) {
    //     !el.classList.contains('hidden') && el.classList.contains('hidden')
    //   }
    //   el.classList.add("hidden");
    // });
  });
});
const right = document.querySelector(".right");
const test = document.createElement("div");
right.appendChild(test);

confirmBets.forEach((confirm) => {
  confirm.addEventListener("click", () => {
    const right = document.querySelector(".right");
    const betName =
      confirm.parentElement.previousElementSibling.children[1].innerHTML;
    const betTitle = confirm.querySelector(".bet-name").innerHTML;
    const toBeInserted = `<div class="final-step">
    <form action="/" method="POST" class="final-bet">
      <h1>${betName}</h1>
      <h1>You're betting on ${betTitle}</h1>
      <label>Username</label>
      <input type="text" name="username" value="" />
      <label>Bet Amount</label>
      <input type="number" name="betamount" value="" />
      <div class="button-container">
        <button type="reset" class="cancel">Cancel</button>
        <button type="Submit" class="submit">Submit</button>
      </div>
    </form>
  </div>`;
    right.insertAdjacentHTML("beforeend", toBeInserted);

    console.log(betName);
  });
});
