export const navSlide = () => {
  const burger = document.querySelector('#burger');
  const mainNav = document.querySelector('#main-nav');
  const nav1 = document.getElementById('nav-1');
  const nav2 = document.getElementById('nav-2');
  const navItems = [nav1, nav2]


  function toggleNav() {
    mainNav.classList.toggle('nav-active');
    burger.classList.toggle('burger-move');
  }

  burger.addEventListener('click', toggleNav);
  navItems.forEach(item => {
    item.addEventListener('click', toggleNav)
  })

};