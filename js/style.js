function goto(id) {
  showCurrentPageButton(id);
  const page = document.getElementById(`main${id}`);
  page.scrollIntoView({ behavior: "smooth" });
}

function showCurrentPageButton(id) {
  const buttons = document.querySelectorAll("span");
  buttons.forEach((button) => {
    if (button.getAttribute("id") === id) {
      if (!button.classList.contains("currentPage")) {
        button.classList.add("currentPage");
      }
      return;
    } else {
      if (button.classList.contains("currentPage")) {
        button.classList.remove("currentPage");
      }
    }
  });
}

function getCurrentId() {
  const element = document.getElementsByClassName("currentPage")[0];
  return element.getAttribute("id");
}

window.addEventListener("wheel", (event) => {
  const ids = ["__home", "__projects", "__about", "__contact"];
  const start = 0;
  const end = 3;
  let current = ids.indexOf(getCurrentId());
  console.log(event.deltaY);
  if (event.deltaY > 0) {
    current++;
    if (current > end) {
      return;
    }
  } else {
    current--;
    if (current < start) {
      return;
    }
  }
  goto(ids[current]);
});
