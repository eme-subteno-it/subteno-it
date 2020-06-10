$(function(){
    
    // Management scroll button
    $(".scroll").click(function() {
        var section = $("." + this.id);
        $("html,body").animate({scrollTop: section.offset().top}, 'slow'); 
    })

    // Management button hamburger menu
    var button = $('#btn-navigation');
    var menu = $('#site-navigation');

    button.click(function () {
        menu.toggleClass('isOpen');
        $('body').toggleClass('isOpen');
    })

});

