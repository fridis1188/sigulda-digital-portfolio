$(document).ready(function() { 

    $("#home_container").css("display", "block");
    $("#about_me_container").css("display", "none");
    $("#my_work_container").css("display", "none");
    $("#contact_container").css("display","none")

    $("#header").css("background", "#45A29E");
    $("#header").css("width", "100%");
    $("#header").css("height", "20%");

    $("#body").css("background", "#1F2833");
    $("#body").css("width", "90%");
    $("#body").css("height", "75%");

    $("#button_row").css("background", "black");
    $("#button_row").css("width", "100%");
    $("#button_row").css("height", "5%");

    $("#title").css("padding-top", "20px");
    $("#title").css("padding-bottom", "20px");
    $("#title").css("color", "white");

    $("#navigation_buttons").css("color", "white");

    $("#body_content").css("background", "yellow");

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "250px");
    
    $("#body_content").css("padding-top", "150px");
    $(".magic-image").css("height", "350px")
    $(".magic-image").css("width", "350px")

    $("#image_content").css("padding-top", "100px");
    $("#form_content").css("padding-top", "100px");

    $("#bar_right").css("height", "75%");
    $("#bar_right").css("width", "5%");
    $("#bar_right").css("background", "#45A29E");

    $("#bar_left").css("height", "75%");
    $("#bar_left").css("width", "5%");
    $("#bar_left").css("background", "#45A29E");

    $("#home").click(function() {
        $("#home_container").css("display", "block");
        $("#about_me_container").css("display", "none");
        $("#my_work_container").css("display", "none");
        $("#contact_container").css("display","none")
    });

    $("#about_me").click(function() {
        $("#home_container").css("display", "none");
        $("#about_me_container").css("display", "block");
        $("#my_work_container").css("display", "none");
        $("#contact_container").css("display","none")
    });

    $("#my_work").click(function() {
        $("#home_container").css("display", "none");
        $("#about_me_container").css("display", "none");
        $("#my_work_container").css("display", "block");
        $("#contact_container").css("display","none")
    });

    $("#contact").click(function() {
        $("#home_container").css("display", "none");
        $("#about_me_container").css("display", "none");
        $("#my_work_container").css("display", "none");
        $("#contact_container").css("display","block")
    });

});