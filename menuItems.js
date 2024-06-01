const menuItems = document.querySelectorAll("a");

for (const menuItem of menuItems) {
  menuItem.addEventListener("click", function() {
    const href = menuItem.getAttribute("data-href");
    window.location.href = href;
  });
}
