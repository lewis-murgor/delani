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

    $("form#contact").submit(function(event) {
        event.preventDefault();
        var user = $("#name").val();
        alert("We have received your message " + user + ". " + "Thankyou for reaching out to us.");
    });
});