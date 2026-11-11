/* Jediny JavaScript webu: mobilne menu a aktualny rok v paticke. */
(() => {
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#mobile-nav');
  if (button && navigation) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      navigation.hidden = open;
      document.body.classList.toggle('nav-open', !open);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navigation.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }));
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
