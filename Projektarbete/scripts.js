
// Puts the black backround behind the menu when scrolling.
$(window).on("scroll", function(){
    if($(window).scrollTop()) {
    $('nav').addClass('black');
}

else{
$('nav').removeClass('black');
}

});