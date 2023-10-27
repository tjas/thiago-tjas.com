//Smooth Scroll
$(document).ready(function (e) {
    $('#menu li a').smoothScroll();
    
    $("#scrollbar-thumb").draggable({
        axis: "y",
        revert: false,
        containment: "#scrollbar-track"
    });
});