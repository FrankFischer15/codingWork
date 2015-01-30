"use strict";
$(document).ready(function() {

    // WOW
    new WOW().init();

    // TEXT ROTATOR
    $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 2000
    });

    // COUNTER
    var scroll = false;

    $(window).scroll(function(e) {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1160 && !scroll) {

            scroll = true;

            $(".cupsOfCoffee").countTo({
                from: 0,
                to: 300,
                speed: 3000
            });

            $(".linesOfCode").countTo({
                from: 0,
                to: 1000,
                speed: 3000
            });

            $(".happyCustomers").countTo({
                from: 1000,
                to: 1,
                speed: 3000
            });
        };
    });


    // CAROUSEL
    $(".carousel").owlCarousel({

        autoPlay: 3000,
        stopOnHover: "true"
    });

    // FORM AJAX REQUEST



    $(".submit").click(function() {

        var user = $("#user").val().length;
        var email = $("#email").val().length;
        var message = $("#yourMessage").val().length;

        if (user > 0 && email > 0 && message > 0) {
            var data = $('form').serialize();
            var url = $('form').attr("action");
            $.post(data, url, function(e) {
                $('form').append('<label class="error">MESSAGE SENT</label>');
            });
        } else {
            $('form').append('<label class="error">ERROR</label>');
        };
    });

    // END BRACKET
});
// END BRACKET