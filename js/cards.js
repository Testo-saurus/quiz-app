document.addEventListener(
  "click",

  (e) => {
    if (e.target.classList.contains("card-button")) {
      const button = e.target; // Use e.target instead of undefined button
      const card = button.closest(".card"); // finds the closest element that has the class card
      const answerElement = card.querySelector(".answer");

      answerElement.classList.toggle("hidden"); // Toggle the hidden class

      button.textContent = answerElement.classList.contains("hidden")
        ? "Show answer"
        : "Hide answer";
    }
  }
);
