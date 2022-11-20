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
    document.querySelector(".final-step") &&
      document.querySelector(".final-step").remove();
    const currentUrl = window.location.href;
    const matchName =
      confirm.parentElement.previousElementSibling.children[1].children[0]
        .textContent;
    const betName = confirm.querySelector(".bet-name").innerHTML;
    const odds = confirm.querySelector(".odds").innerHTML;
    const toBeInserted = `<div class="final-step">
    <form action="${currentUrl}/submit" method="POST" class="final-bet">
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
    right.scrollIntoView(true);
  });
});

//TO REMOVE ELEMENT WHEN PRESS CANCEL (USING EVENT DELEGATION)

right.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel")) {
    const toBeRemove = e.target.closest(".final-step");
    toBeRemove.remove();
  }
});

// right.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (e.target.classList.contains("final-bet")) {
//     const name = e.target.querySelector("h1").textContent;
//     const betName = e.target.querySelector(".betName").textContent;
//     const odds = e.target.querySelector(".oddValue").textContent;
//     console.log(name, betName, odds);

//     fetch("http://127.0.0.1:3000/submit", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, betName, odds }),
//     });
//   } else {
//     console.log(e);
//   }
// });
