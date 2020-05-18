$(document).ready(function(){
    
    $('.main').click(function () {
        $(this).children('.hideMe').slideToggle(1200);
        $(this).children('.show').toggle(1500);
      });
