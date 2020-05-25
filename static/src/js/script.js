$(function(){
    
    $(".scroll").click(function() {
        var section = $("." + this.id);
        $("html,body").animate({scrollTop: section.offset().top}, 'slow'); 
    })


});

