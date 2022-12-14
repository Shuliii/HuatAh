const anchors = document.querySelectorAll(".anchors");
const slide = document.querySelector(".slider");
const expands = document.querySelectorAll(".expand");
const confirmBets = document.querySelectorAll(".confirm-bet");
const right = document.querySelector(".right");
const iconMenuClose = document.querySelector(".icon-menu-close");
const body = document.querySelector("body");

const width = 100 / anchors.length;
slide.style.width = `${width}%`;

//THIS IS NAVIGATION
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const element = e.target;
    const content = e.target.textContent;
    const tobeChecked = document.querySelector(`#${content}`);
    tobeChecked.checked = true;
    const tobeToggled = document.querySelector(`.${content}`);
    const tobeRemoved = document.querySelector('[data-status="active"]');
    tobeRemoved && tobeRemoved.setAttribute("data-status", "inactive");
    tobeToggled.setAttribute("data-status", "active");
    element.classList.add("active");
  });
});

//TO EXPAND TO BETS DETAILS
[...expands].forEach((expand) => {
  expand.addEventListener("click", (e) => {
    const detail = expand.nextElementSibling;
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

//THIS IS TO POP UP MODAL
confirmBets.forEach((confirm) => {
  confirm.addEventListener("click", () => {
    if (!right.classList.contains("hidden")) return;
    if (right.children[1]) document.querySelector(".final-step").remove();
    const game = confirm.closest(".options").classList[2];
    const matchName =
      confirm.parentElement.previousElementSibling.children[1].children[1].innerHTML.trim();
    const betName = confirm.querySelector(".bet-name").innerHTML;
    const odds = confirm.querySelector(".odds").innerHTML;
    const toBeInserted = `<div class="final-step">
    <form action="/submit" method="POST" class="final-bet" name="final-bet">
      <input type="text" name="game" readonly="readonly" value="${game}">
      <input type="text" name="matchName" readonly="readonly" value="${matchName}">
      <h1>You're betting on <input type="text" name="betName" readonly="readonly" value="${betName}"></h1>
      <h1>Odds: <input type="text" name="odds" readonly="readonly" value="${odds}"></h1>
      <label>Username</label>
      <input type="text" name="username" value="" required/>
      <label>Bet Amount</label>
      <input type="number" name="betamount" value="" min="1" required/>
      <div class="button-container">
        <button type="reset" class="cancel">Cancel</button>
        <button type="Submit" class="submit">Submit</button>
      </div>
    </form>
  </div>`;
    right.insertAdjacentHTML("beforeend", toBeInserted);
    right.classList.remove("hidden");
    body.style.overflow = "hidden";
  });
});

//TO REMOVE MODAL BY PRESSING X

iconMenuClose.addEventListener("click", (e) => {
  const toBeRemove = e.target.nextSibling.nextElementSibling;
  console.log(toBeRemove);
  toBeRemove && toBeRemove.remove();

  right.classList.add("hidden");
  body.style.overflow = "visible";
});

//TO REMOVE ELEMENT WHEN PRESS CANCEL (USING EVENT DELEGATION)

right.addEventListener("click", (e) => {
  const toBeRemove = e.target.closest(".final-step");
  const toBeSubmitted = e.target.closest(".final-bet");
  if (e.target.classList.contains("cancel")) {
    toBeRemove.remove();
    right.classList.add("hidden");
    body.style.overflow = "visible";
  }
  if (e.target.classList.contains("submit")) {
    if (toBeSubmitted.checkValidity()) {
      toBeSubmitted.submit();
      toBeRemove.remove();
      const toBeInserted = `<div class="announcement">
    <h2>Thank you for placing your bets. Please double check your bets by using the search bar.</h2>
  </div>`;
      right.insertAdjacentHTML("beforeend", toBeInserted);
    }
  }
});

// right.addEventListener("click", (e) => {
//   const toBeRemove = e.target.closest(".final-step");
//   const toBeSubmitted = e.target.closest(".final-bet");
//   console.log(toBeRemove);
//   console.log(toBeSubmitted);
//   toBeSubmitted.submit();
//   toBeRemove.remove();
// });
