$(document).ready(function() { 

    $("#home_container").css("display", "block");
    $("#about_me_container").css("display", "none");
    $("#my_work_container").css("display", "none");
    $("#contact_container").css("display","none")

    $("#header").css("background", "url('header.png')");
    $("#header").css("width", "100%");
    $("#header").css("height", "20%");

    $("#body").css("background", "#1F2833");
    $("#body").css("width", "90%");
    $("#body").css("height", "75%");

    $("#button_row").css("background", "black");
    $("#button_row").css("width", "100%");
    $("#button_row").css("height", "5%");

    $("#title").css("color", "white");

    $("#navigation_buttons").css("color", "white");
    $("#navigation_buttons").css("float", "right");

    $("#body_content").css("color", "#66FCF1");
    $("#body_content").css("font-family", "sans-serif");
    $("#body_content").css("font-size", "300%");

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "250px");
    
    $("#body_content").css("padding-top", "50px");
    $("#body_content").css("left", "100px");
    $(".magic-image").css("height", "350px")
    $(".magic-image").css("width", "350px")

    $("#list_content").css("padding-top", "50px");
    $("#list_content").css("color","#8190A5")
    $("#list_content").css("font-size", "150%");

    $("#about_me_container").css("color", "#66FCF1");
    $("#about_me_container").css("padding-top", "100px");

    $("#bar_right").css("height", "75%");
    $("#bar_right").css("width", "5%");
    $("#bar_right").css("background", "url('gradient_background.jpg')");

    $("#bar_left").css("height", "75%");
    $("#bar_left").css("width", "5%");
    $("#bar_left").css("background", "url('gradient_background.jpg')");

    $("#f").css("height","15%");
    $("#f").css("width","15%");

    $("#g").css("height","20%");
    $("#g").css("width","20%");

    $("#github").css("height","15%");
    $("#github").css("width","15%");

    $("#logos").css("background","#8190A5");
    $("#logos").css("width","80%");
    $("#logos").css("margin","auto");

    $("#info").css("background","#8190A5");

    $("#contact_container").css("padding-top","70px")

    $("#my_work_container").css("padding-top", "50px");

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