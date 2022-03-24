(() => {
  const menuBtnRef = document.querySelector("[data-header__button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const backdrop = document.querySelector(".header__backdrop")
  

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
       backdrop.classList.toggle("is-hidden");
  });
})();