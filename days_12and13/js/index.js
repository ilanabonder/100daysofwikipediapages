var element = document.querySelector("body");
window.addEventListener("scroll", function(e) {
  element.style.setProperty('--top', window.pageYOffset);
});