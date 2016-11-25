$( document ).ready(function() {
    $("ul.tabs li").click(function(e){
      e.preventDefault();
      if(!$("this a").hasClass("active")){
        nthContent = $(this).index();
        nthContent += 1;
        // remove active class from tabs and content
        $("ul.tabs li a.active, .content.active").removeClass("active");
        // add active class to tab and content
        $("this a").addClass("active");
        $(".content:nth-of-type("+nthContent+")").addClass("active");
      }
    });
});