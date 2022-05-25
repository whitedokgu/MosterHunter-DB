const list = document.querySelectorAll(".main-nav>li");

for (var i = 0; i < list.length; i++) {
  list[i].querySelector(".nav-link").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.parentNode.classList.add("active");
  });
}
