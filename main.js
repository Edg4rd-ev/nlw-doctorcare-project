const navigation = document.getElementById("navigation")
function onScroll() {
  showNavOnScroll()
  showHomeBtnOnScroll()
}
function showNavOnScroll(){
  if (scrollY > 1) {
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}
function showHomeBtnOnScroll(){
  if (scrollY > 400){
    homeBtn.classList.add('show')
  }else{
    homeBtn.classList.remove('show')
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
}).reveal(`
  #home, #home img, #home .stats, 
  #services, #services .card, 
  #about, #about .content, #about .content img,
  #contact, #contact .content, #contact .content img,
  footer, footer .logo, footer p, footer .social-links
`);