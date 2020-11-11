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
  