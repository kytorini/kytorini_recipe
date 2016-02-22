$(document).ready(function() {
  $('.content').click(function(){
    $(this).animate({left: "-=50px"}, 'fast');
    $(this).removeClass('blur');
  });
});