// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

new Promise((resolve, reject) => {
  setTimeout(() => {
    document.querySelector(".modal").style.display = "block";
  }, 60000);
});
document
  .querySelector(".close")
  .addEventListener(
    "click",
    (e) => (document.querySelector(".modal").style.display = "none")
  );
