$(document).ready(function() {
    $('.toggle-nav').click(function() {
        $(this).slideDown(900);
        $('.menu ul').slideToggle(900);
 
        e.preventDefault();
    });
});

$(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
});


