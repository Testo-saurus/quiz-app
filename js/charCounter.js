const charCount = document.getElementById("charCount");

const textArea = document.getElementById("question-field");

textArea.addEventListener(
  "input",

  (e) => {
    const maxChar = 150;
    const charTyped = e.target.value.length;

    console.log(charTyped);
    charCount.innerText = `${charTyped}/150`;

    if (charTyped > maxChar) {
      textArea.value = e.target.value.slice(0, maxChar);
      charCount.style.color = "red";
    }
  }
);
