const btn = document.querySelector(".bookmark-btn");
const icon = document.querySelector(".bookmark-icon");
let isBookmarked = false;

btn.addEventListener("click", () => {
  isBookmarked = !isBookmarked;

  isBookmarked
    ? (icon.src = "assets/img/bookmark_24dp_1F1F1F_FILL1.svg")
    : (icon.src = "assets/img/bookmark_24dp_1F1F1F_FILL0.svg");
});

// //Get all bookmark buttons on the page
// const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

// // Add event listeners to each button
// bookmarkButtons.forEach((btn) => {
//   // Find the icon within this button
//   const icon = btn.querySelector(".bookmark-icon");
//   let isBookmarked = false;

//   btn.addEventListener("click", () => {
//     isBookmarked = !isBookmarked;

//     isBookmarked
//       ? (icon.src = "assets/img/bookmark_24dp_1F1F1F_FILL1.svg")
//       : (icon.src = "assets/img/bookmark_24dp_1F1F1F_FILL0.svg");
//   });
// });
