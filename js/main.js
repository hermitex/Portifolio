const menuLinks = Array.from(document.querySelectorAll('.menu-link'));

const makeLinkActive = (link) => {
  menuLinks.forEach((menuLink) => menuLink.classList.remove('active'));
  return link.classList.add('active');
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
