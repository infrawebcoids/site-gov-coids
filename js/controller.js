var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (event) {
  if (window.scrollY == 0) {
    botao.classList.remove("visible");
  } else {
    botao.classList.add("visible")
  }
});