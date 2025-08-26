import "./style.css";
import { getData } from "./request";
import { updateUI } from "./updateUI";

const searchForm = document.getElementById("searchForm")!

getData("https://api.github.com/users/" + "akhrorsoliev")
  .then((data) => {
    updateUI(data);
  })
  .catch((error) => {
    console.log(error);
  });
