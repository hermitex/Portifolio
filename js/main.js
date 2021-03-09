const menuLinks = Array.from(document.querySelectorAll('.menu-link'));

menuLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      return;
    } else {
      link.classList.add('active');
      if (link[index + 1].classList.remove('active')) {
        link[index + 1].classList.add('active');
      } else {
        link[index - 1].classList.remove('active');
      }
    }
  });
});
