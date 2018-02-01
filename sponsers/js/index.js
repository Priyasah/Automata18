
var button = document.querySelector('.menu-icon');

$('.menu-icon').click(function(){
  if($(this).attr('class').indexOf('open')==-1)
  {
    $('.sidebar').addClass('active');
    $(this).addClass("open");
  }
    else{
     $('.sidebar').removeClass('active');
     $(this).removeClass("open");}



});











var items = $('.item'); // your selector
var delayspeed = 400; // your delay speed
var fadeinspeed = 800; // your fade in speed

$.each(items, function(i, item) {

    $(item).delay(delayspeed*i).fadeIn(fadeinspeed);

});
