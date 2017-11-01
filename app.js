$(document).ready(function() { 

    var layoutSettings = {
        "headerHeight": "20%",
        "bodyHeight": "75%",
        "footerHeight": "5%",
    };

    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");

    $("#header").css("background", "black");
    $("#header").css("width", "100%");
    $("#header").css("height", "20%");

    $("#body").css("background", "blue");
    $("#body").css("width", "100%");
    $("#body").css("height", "75%");
    
    $("#footer").css("background", "red");
    $("#footer").css("width", "100%");
    $("#footer").css("height", "5%");

    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#body_content").css("background", "yellow");

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "250px");
    
    $("#body_content").css("padding-top", "150px");
    $(".magic-image").css("height", "350px")
    $(".magic-image").css("width", "350px")

    $("#image_content").css("padding-top", "100px");
    $("#form_content").css("padding-top", "100px");

    $("#navigation_buttons p").hover(function(){
        $(this).css("color", "black");
    }, function() {
        $(this).css("color", "white");
    });

    $("#navigation_buttons p").click(function(){
        var text = $(this).text();
        if(text === "Par mani") {
            $("#body_container").css("display", "block");
            $("#image_container").css("display", "none");
            $("#form_content").css("display", "none");
        }

        if(text === "Darbi") {
            $("#body_container").css("display", "none");
            $("#image_container").css("display", "block");
            $("#form_content").css("display", "none");
        }

        if(text === "Sazinaties") {
            $("#body_container").css("display", "none");
            $("#image_container").css("display", "none");
            $("#form_content").css("display", "block");
        }
    });

    for (var index = 0; index < 3; index++) {
        $.ajax({
            type: 'GET',
            url: 'http://thecatapi.com/api/images/get?format=html',
            dataType: 'text',
            success: function(data) { 
                var output = data;
                
                var div = $("<div></div>");
                div.addClass("col-sm-4");
    
                var image = $(output);
                image.find("img").css("height", "350px")
                image.find("img").css("width", "350px")
                div.append(image);
    
                $("#image_content").append(div);
            },
            error: function(data) { alert('fail') }
          });
    }

    //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

    var email = {"personalizations": [{"to": [{"email": "rolands.krumbergs@outlook.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]}

    $.ajax({
        type: 'POST',
        url: 'https://api.sendgrid.com/v3/mail/send',
        dataType: 'json',
        data: email,
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', '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');},
        success: function(data) { 
            var output = data;
            alert(output);
        },
        error: function(data) { alert('fail') }
      });
});