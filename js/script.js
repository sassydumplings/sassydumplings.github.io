$(document).ready(function(){
  console.log(':)')

  $('.flip').click(function(){
          $(this).find('.card').addClass('flipped').mouseleave(function(){
              $(this).removeClass('flipped');
          });
          return false;
      });
})
