window.addEventListener("scroll", () => {
  Loading();
});

const Loading = () => {
  document.querySelectorAll("body *").forEach((element) => {
    if (
      element.getBoundingClientRect().top+window.pageYOffset <=
      window.scrollY + window.innerHeight
      ) {
      if (!element.classList.contains("d")) {
        setTimeout(() => {
          element.classList.add("d");
        }, 100);
      }
    }
  });
};

window.addEventListener("scroll", () => {
  let logo = document.getElementById("logo").style;
  let nav = document.getElementById("nav").style;
  let header = document.getElementById("header").style;
  let side = document.getElementById("side");
  let main = document.getElementById("main").style;
  if (window.scrollY > 110) {
    if (window.innerWidth > 760) {
      header.height = "40px";
      nav.height = "40px";
      header.position = "fixed";
      logo.display = "none";
      nav.width = "1000px";
      if (side != undefined) {
        side.style.paddingTop = "40px";
      }
      main.marginTop = "150px";
    }
  } else {
    if (window.innerWidth > 760) {
      if (side != undefined) {
        side.style.paddingTop = `${150 - window.scrollY}px`;
      }
      header.height = "150px";
      nav.height = "30px";
      header.position = "static";
      logo.display = "flex";
      nav.width = "800px";
      main.marginTop = "0px";
    }
  }
});

document.getElementById("hamburg").addEventListener("click", () => {
  if (screen.width <= 760) {
    let bar = document.getElementById("bar").style;
    let xmark = document.getElementById("xmark").style;
    let nav = document.getElementById("phon-nav").style;
    let html = document.querySelector("html").style;
    if (bar.display == "block") {
      bar.display = "none";
      xmark.display = "block";
      nav.display = "flex";
      html.overflow = "hidden";
      setTimeout(() => {
        nav.opacity = "1";
      }, 1);
    } else {
      bar.display = "block";
      xmark.display = "none";
      nav.display = "none";
      nav.opacity = "0";
      html.overflow = "scroll";
    }
  }
});
