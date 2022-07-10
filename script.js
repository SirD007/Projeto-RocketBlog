function openMenu() {
    var navMenu = document.querySelector('.mobile_nav_itens');
    if (navMenu.style.display === "none") {
      navMenu.style.display = "block";
    } else {
      navMenu.style.display = "none";
    }
  }