const burger = document.getElementById("burger");
const close = document.getElementById("close");
const menu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    close.style.display = "flex";
    burger.style.display = "none";
  } else {
    menu.style.display = "none";
    close.style.display = "none";
  }
});

close.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    burger.style.display = "flex";
  } else {
    burger.style.display = "none";
    menu.style.display = "flex";
  }
});
