export default (_, inject) => {
  inject('onscroll', menuContainer => {
    toggleClass(menuContainer)
  });
  
}

let toggleClass = (menuContainer) => {
  
  let scrollV = '';
  window.onscroll = () => {
    scrollV = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollV > 10) {
      menuContainer.classList.add('scrolled')
    } else {
      menuContainer.classList.remove('scrolled')
    }
  }
}