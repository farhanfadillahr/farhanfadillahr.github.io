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

  if(scroll >= 893 && scroll < 2617){
    $("#Statresume").addClass("active");
    $("#Stathome").removeClass("active");
    $("#Statporto").removeClass("active");

  }else if(scroll < 893) {
    $("#Stathome").addClass("active");
    $("#Statresume").removeClass("active");
    $("#Statporto").removeClass("active");
  }else if(scroll > 2617) {
    $("#Statporto").addClass("active");
    $("#Statresume").removeClass("active");
    $("#Stathome").removeClass("active");
  }

});
