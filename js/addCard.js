const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = e.target.question.value;
  const questionTitle = e.target.questionTitle.value;
  const answer = e.target.answer.value;
  const tag = e.target.tag.value;

  console.log(question, answer, tag);

  //sucess message
  const successMessage = document.createElement("div");
  successMessage.classList.add("success-message");
  successMessage.textContent = "Card created!";
  successMessage.style.backgroundColor = "white";
  successMessage.style.position = "fixed";
  successMessage.style.top = "5px";
  successMessage.style.zIndex = "100";

  successMessage.style.border = "solid 1px";
  successMessage.style.borderRadius = "4px";
  form.append(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 2000);

  const newCardEl = document.createElement("article");

  newCardEl.classList = "card";

  const title = document.createElement("h2");
  title.innerText = questionTitle;
  newCardEl.append(title);

  const tagDivEl = document.createElement("div");
  tagDivEl.classList.add("tags");

  const tagSpanEl = document.createElement("span");
  tagSpanEl.classList.add("tag");
  tagSpanEl.innerText = tag;

  tagDivEl.append(tagSpanEl);
  newCardEl.append(tagDivEl);

  const questionEl = document.createElement("p");
  questionEl.innerText = question;
  newCardEl.append(questionEl);

  const answerEl = document.createElement("p");
  answerEl.innerText = answer;
  answerEl.classList.add("answer", "hidden");
  newCardEl.append(answerEl);

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("card-button");
  buttonEl.innerText = "Show Answer";
  newCardEl.append(buttonEl);

  document.querySelector(".main-content").append(newCardEl);

  form.reset();
});
