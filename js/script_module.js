window.addEventListener("scroll", function(){
    const header = this.document.querySelector(".header");
    const nav = this.document.querySelector(".nav");
    const name_logo = this.document.querySelector(".nav__logo span");
    header.classList.toggle("sticky", this.window.scrollY > 0);
    nav.classList.toggle("sticky", this.window.scrollY > 0);
    name_logo.classList.toggle("sticky", this.window.scrollY > 0);
  });

