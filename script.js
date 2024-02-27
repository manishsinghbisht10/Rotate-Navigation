const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", function () {
  console.log(open);
  container.classList.add("show-nav");
});

close.addEventListener("click", function () {
  container.classList.remove("show-nav");
});
