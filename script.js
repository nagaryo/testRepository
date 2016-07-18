window.onload = function() {

  var openBtn = document.getElementById("openBtn");
  var subNav = document.getElementById("subNav");

  openBtn.onclick = function() {
    subNav.classList.add("show");
  };

  subNav.onclick = function() {
    subNav.classList.remove("show");
  };

};
