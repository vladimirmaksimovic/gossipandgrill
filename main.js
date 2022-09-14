// style color of navigation link
const navLink = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLink.length; i++) {
  if (navLink[i].attributes[0].value === "#") {
    navLink[i].style.color = "var(--blue)";
  }
}

