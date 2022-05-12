function onScroll() {
  if (scrollY === 0) {
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