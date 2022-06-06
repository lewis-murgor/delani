$(document).ready(function() {
    $("#design").click(function() {
        $(".design-showing").toggle();
        $(".design-hidden").toggle();
    });
    $("#development").click(function() {
        $(".development-showing").toggle();
        $(".development-hidden").toggle();
    });
    $("#product").click(function() {
        $(".product-showing").toggle();
        $(".product-hidden").toggle();
    });

    $("#clickable").hover(function() {
        $(this).css("background-color", "white");
    }, function() {
        $(this).css("background-color", "initial-color");
    });

    $("form#contact").submit(function(event) {
        event.preventDefault();
        var user = $("#name").val();
        alert("We have received your message " + user + ". " + "Thankyou for reaching out to us.");
    });
});

$(document).ready(function() {
    $(".work1").mouseover(function() {
        $("#delani").show();
    }).mouseout(function() {
        $("#delani").hide();
    });

    $(".work2").mouseover(function() {
        $("#ontario").show();
    }).mouseout(function() {
        $("#ontario").hide();
    });

    $(".work3").mouseover(function() {
        $("#delani-studio").show();
    }).mouseout(function() {
        $("#delani-studio").hide();
    });

    $(".work4").mouseover(function() {
        $("#weather").show();
    }).mouseout(function() {
        $("#weather").hide();
    });

    $(".work5").mouseover(function() {
        $("#day").show();
    }).mouseout(function() {
        $("#day").hide();
    });

    $(".work6").mouseover(function() {
        $("#age").show();
    }).mouseout(function() {
        $("#age").hide();
    });

    $(".work7").mouseover(function() {
        $("#burner").show();
    }).mouseout(function() {
        $("#burner").hide();
    });

    $(".work8").mouseover(function() {
        $("#giraffe").show();
    }).mouseout(function() {
        $("#giraffe").hide();
    });
});