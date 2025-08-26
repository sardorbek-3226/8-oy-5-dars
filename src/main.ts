import "./style.css";
import { getData } from "./request";
import { updateUI } from "./updateUI";

const searchForm = document.getElementById("searchForm") as HTMLFormElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = searchInput.value;

  getData("https://api.github.com/users/" + username)
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
