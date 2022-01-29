const navBar = () => {
  const menu = document.querySelector(".menu");
  const header = document.querySelector("header");
  const arrow = document.querySelector(".arrow");
  const logo = document.querySelector(".logo");
  const menuContent = document.querySelector(".menu-content");
  const links = document.querySelectorAll("a");
  const moreFrom = document.querySelectorAll(".more-from");

  menu.addEventListener("click", () => {
    header.classList.toggle("clicked");

    arrow.classList.toggle("arrow-up");

    arrow.classList.toggle("svg-color");

    logo.classList.toggle("svg-color");

    menuContent.classList.toggle("transform-clear");
    menuContent.classList.toggle("clicked");

    links.forEach((link, index) => {
      const parentEle = link.parentElement.parentElement.parentElement;
      if (
        parentEle.classList[0] === "menu-content" ||
        parentEle.classList[0] === "more-on" ||
        parentEle.classList[0] === "more-from"
      ) {
        link.style.color = "#fff";

        if (link.style.transition && link.style.opacity) {
          link.style.transition = "";
          link.style.opacity = 0;
        } else {
          link.style.transition = "opacity ease 0.75s";
          link.style.opacity = 1;
        }
      }
    });

    moreFrom.forEach((div) => div.classList.toggle("clicked"));
  });
};

const main = () => {
  navBar();
};

main();
