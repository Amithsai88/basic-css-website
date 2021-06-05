function mobileNav() {
  var id = document.getElementById("topnav");
  if (id.className === "main-menu") {
    id.className += " responsive";
  } else {
    id.className = "main-menu";
  }
}
