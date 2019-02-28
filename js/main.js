$ (document).ready(function(){

  $('#abbutton').on('click', function(){
    window.location="./about-me.html";
  });
  $('#resbutton').on('click', function(){
    window.location="./resume.html";
  });

  $(window).scroll(function() {
    var x = $(window).scrollTop();

    if (x <= 100) {
      $(".navbar-brand img").css("display", "none");
      // $(".navbar-brand").show();
      $(".logo").css("display", "block");
      // setTimeout(function(){$(".logo").css("z-index", "10000")},300);
    } else {
      $(".navbar-brand img").css("display", "block");
      // $(".navbar-brand").hide();
      $(".logo").css("display", "none");
      // $(".logo").css("z-index", "0");
    }
  });

});
