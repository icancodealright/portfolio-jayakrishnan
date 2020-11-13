function goto(id, isPage) {
  if (isPage == "true") {
    showCurrentPageButton(id);
    const page = document.getElementById(`main${id}`);
    page.scrollIntoView({ behavior: "smooth" });
  } else {
    const divs = document.getElementById("projects__content").children;
    console.log(divs);
    Array.from(divs).forEach((div) => {
      if (div.getAttribute("id") == `project__of${id}`) {
        div.classList.remove("hide");
        div.classList.add(`content__of${id}`);
      } else {
        div.className = "";
        div.classList.add("hide");
      }
    });
  }
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
  goto(ids[current], "true");
});

//for next button
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
