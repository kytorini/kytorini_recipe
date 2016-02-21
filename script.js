$(document).ready(function() {
    // $('section').draggable();
  $('.content').click(function(){
    $(this).animate({left: "-=50px"}, 'fast');
    $(this).removeClass('blur');
  });
});