const logoImg = document.querySelector(".logo");
const cards = document.querySelectorAll(".card");
const expands = document.querySelectorAll(".expand");
const confirmBets = document.querySelectorAll(".confirm-bet");
const right = document.querySelector(".right");

logoImg.addEventListener("click", () => {
  location.href = "/";
});

//TO REDIRECT USER TO THE RESPECTIVE BET

[...cards].forEach((card) => {
  card.addEventListener("click", () => {
    const description = card.children[1].textContent;
    location.href = `/${description}`;
  });
});

// TO EXPAND LIST OF BETS

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
  });
});

//TO DISPLAY POP UP TO CONFIRM BET

confirmBets.forEach((confirm) => {
  confirm.addEventListener("click", () => {
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
  });
});

//TO REMOVE ELEMENT WHEN PRESS CANCEL (USING EVENT DELEGATION)

right.addEventListener('click', (e) => {
  if (e.target.classList.contains('cancel')) {
    const toBeRemove = e.target.closest('.final-step')
    toBeRemove.remove();
  }
})
