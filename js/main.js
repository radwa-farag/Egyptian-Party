//Loading screen
$(document).ready(function () {
    $("#loading .spinner").fadeOut(1000, function () {
        $("#loading").fadeOut(1000, function () {
            $("body").css("overflow-y", "auto");
        });
    });

    let detailsOffset = $("#details").offset().top;
    console.log(detailsOffset);
    $(window).scroll(function () {
        let wScroll = $(window).scrollTop();
        if (wScroll > detailsOffset - 50) {
            $("#button").fadeIn(500);
        }
        else {
            $("#button").fadeOut(500);
        }
    });
    $("#button").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    
    let width = $(".slide").innerWidth();
    $(".slideBar").css("left", -width);

    $(".openSlide").click(function () {
        $(".slideBar").animate({ left: 0 }, 500);
        $(".openSlide").animate({ left: width }, 500);
    });

    $(".closeIcon").click(function () {
        $(".slideBar").animate({ left: -width }, 500);
        $(".openSlide").animate({ left: 0 }, 500);
    });


    $(".slideBar a").click(function (e) {
        let aHref = $(e.target).attr('href');
        let sectionOffset = $(aHref).offset().top;
        $("html,body").animate({ scrollTop: sectionOffset }, 2000);
    });

    $("#details button").click(function () {
        $(this).next().slideToggle(500);
        $("p").not($(this).next()).slideUp(500);
    });



    let eventDate = new Date("Dec 22, 2022 17:30:00").getTime();

    let func = setInterval(function () {
        let currentDate = new Date().getTime();
        let remaningTime = eventDate - currentDate;

        let days = Math.floor(remaningTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remaningTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remaningTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remaningTime % (1000 * 60)) / 1000);

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

        if (remaningTime <= 0) {
            $("#days").html("00");
            $("#hours").html("00");
            $("#minutes").html("00");
            $("#seconds").html("00");
            $("#eventStart").removeClass("d-none");
        }
    }, 1000);


    $("textarea").keyup(function () {
        let calc = 100 - Number(this.value.length);
        if (calc > 0)
            $("#num").html(calc);
        else {
            $("#num").html("your available character finished ");
        }
    });
});

