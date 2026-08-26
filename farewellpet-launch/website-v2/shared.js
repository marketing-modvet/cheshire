document.addEventListener('DOMContentLoaded', function(){
  var burger = document.querySelector('.hamburger');
  var menu = document.querySelector('.mobile-menu');
  if(burger && menu){
    burger.addEventListener('click', function(){
      menu.classList.toggle('open');
    });
  }
});
