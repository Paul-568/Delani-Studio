$(document).ready(function(){
    
    $('.main').click(function () {
        $(this).children('.hideMe').slideToggle(1200);
        $(this).children('.show').toggle(1500);
      });
$('.card').hover(function(event){
      $(".card").hover(function () {
        $(this).children(".card-1").fadeToggle('fast', "linear");
      });
      });
      event.preventDefault();