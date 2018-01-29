

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
