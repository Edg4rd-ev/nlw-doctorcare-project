function onScroll() {
  if (scrollY < 1) {
    navigation.classList.remove('scroll')
  }else{
    navigation.classList.add('scroll')
  }
}
function openMenu() {
  document.body.classList.add('menu-ex')
}
function closeMenu() {
  document.body.classList.remove('menu-ex')
}
ScrollReveal({
  origin: 'top',
  distance: '3rem',
  duration: '1000',
}).reveal('#home, #home img, #home .stats, #services, #services .card');