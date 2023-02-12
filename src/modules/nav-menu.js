// const nav = document.querySelector(".header-nav");

(function () {
  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll = 0;
  let direction = 0;
  let prevDirection = 0;

  const header = document.querySelector(".header");
  const logo = header.querySelector(".logo");
  const burgerBtn = header.querySelector(".header__burger");
  const headerDropdownMenu = header.querySelector(".header__dropdown-menu");

  const openMenu = () => {
    headerDropdownMenu.classList.toggle("hide");
  };

  const handlerClick = () => {
    w.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScroll = function () {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  const toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 72) {
      header.classList.add("hide");
      prevDirection = direction;
      headerDropdownMenu.classList.add("hide");
    } else if (direction === 1) {
      header.classList.remove("hide");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
  logo.addEventListener("click", handlerClick);
  burgerBtn.addEventListener("click", openMenu);
})();
