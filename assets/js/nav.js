//handles the site navigation

(function(){
  var menu = document.getElementById('site-nav');
  var menu_control = document.getElementById('site-nav-control');

  //check if menu_control is visible or not and set aria attribute
  var menu_init = function(){
    if (menu_control.offsetParent == null){
      menu.setAttribute('aria-hidden', 'false');
    }
    else{
      menu.setAttribute('aria-hidden', 'true');
    }
  }

  //when window is resized clean up mobile nav
  var menu_window_resize = function(){
    if (menu_control.offsetParent == null){
      menu.setAttribute('aria-hidden', 'false');
      menu.classList.remove('open');
      menu_control.classList.add('open-site-nav');
      menu_control.classList.remove('close-site-nav');
    }
    else{
      menu.setAttribute('aria-hidden', 'true');
    }
  }

  //handling when the menu is open and closed
  var toggle_menu = function(){
    menu.classList.toggle('open');

    if (menu.getAttribute('aria-hidden') == 'false'){
      menu.setAttribute('aria-hidden', 'true');
    }
    else{
      menu.setAttribute('aria-hidden', 'false');
    }
    menu_control.classList.toggle('open-site-nav');
    menu_control.classList.toggle('close-site-nav');
  }

  //initialization
  menu_init();

  //resize
  window.addEventListener('resize', menu_window_resize, false);

  //click
  menu_control.onclick = function(event){
    toggle_menu();
  }

})();
