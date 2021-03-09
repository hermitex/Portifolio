const menuLinks = Array.from(document.querySelectorAll('.menu-link'));
const welcomeMessage = Array.from(
  document.querySelectorAll('.welcome-message')
);

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

menuLinks.forEach((link) => {
  link.addEventListener('hover', (e) => {
    console.log('ýes');
    if (e.target.classList.contains('active')) {
      return;
    } else {
      makeLinkActive(e.target);
    }
  });
});

setInterval(() => {
  welcomeMessage.forEach((message) => {
    message.classList.add('show');
  });
}, 3000);
