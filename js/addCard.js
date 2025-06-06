form.addEventListener("submit", (e) => {
  const form = document.getElementById("form");

  e.preventDefault();

  const question = e.target.question.value;
  const questionTitle = e.target.questionTitle.value;
  const answer = e.target.answer.value;
  const tag = e.target.tag.value;

  console.log(question, answer, tag);

  const newCardEl = document.createElement("article");

  newCardEl.classList = "card";

  const title = document.createElement("h2");
  title.innerText = questionTitle;
  newCardEl.append(title);

  const questionEl = document.createElement("p");
  questionEl.innerText = question;
  newCardEl.append(questionEl);

  document.querySelector(".main-content").append(newCardEl);
});
