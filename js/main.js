const menuLinks = Array.from(document.querySelectorAll('.menu-link'));

const makeLinkActive = (link) => {
  return menuLinks.filter((menuLink) =>
    menuLink != link
      ? menuLink.classList.remove('active')
      : link.classList.add('active')
  );
};

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      return;
    } else {
      makeLinkActive(e.target);
    }
  });
});
