$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  console.log(scroll);

  if(scroll >= 555){
    $("#nav").addClass("fixed-top");
    $("#nav").addClass("bg-light");
    $("#nav").removeClass("bg-white");
    $("#gambar").addClass("invisible");

  }else{
    $("#nav").removeClass("fixed-top");
    $("#nav").addClass("bg-white");
    $("#gambar").removeClass("invisible");
  }

  if(scroll >= 987){
    $("#Statresume").addClass("active");
    $("#Stathome").removeClass("active");
  }else if(scroll < 987) {
    $("#Statresume").removeClass("active");
    $("#Stathome").addClass("active");
  }

});
