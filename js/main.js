$ (document).ready(function(){
  $('#navbar li').removeClass('pulse');
    $('#navbar li').on('mouseenter', function(){
      $(this).addClass('pulse');
      console.log("FUNCIONA")
      $(this).on('mouseleave', function(){
        $(this).removeClass('pulse');
      });
    });
});
