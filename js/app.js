const navSlide = () => {
  const burger = document.querySelector('#burger');
  const mainNav = document.querySelector('#main-nav');

  burger.addEventListener('click', () => {
    console.log('i was clicked');
    mainNav.classList.toggle('nav-active');
    burger.classList.toggle('burger-move');
  })
}

navSlide()