$(document).ready(function() {

	// jQuery Function Number #1
	$(".button1").click(function() {
		// jQuery Function Number #6
		$('html, body').animate({scrollTop: 0}, 1000);
	});
	$(".button2").click(function() {
		$('html, body').animate({scrollTop: 750}, 1000);
	});
	$(".button4").click(function() {
		$('html, body').animate({scrollTop: 1600}, 1000);
	});

	// jQuery Function Number #2
	$("h1").hover(function(){
	// jQuery Function Number #3
    $(this).css("transform", "scale(1.1, 1.1)");
    $(this).css("transition", "0.1s");
    $(this).css("cursor", "default");
	}, function(){
    $(this).css("transform", "scale(1.0, 1.0)");
	});

	$(".content2").hide();
	$(".content3").hide();
	// jQuery Function Number #4

    $(".name-button1").click(function() {
        $(".content2").hide();
        $(".content3").hide();
        // jQuery Function Number #5
        $(".content1").show();
    });

    $(".name-button2").click(function() {
        $(".content1").hide();
        $(".content3").hide();
        $(".content2").show();
    });

    $(".name-button3").click(function() {
        $(".content1").hide();
        $(".content2").hide();
        $(".content3").show();
    });
})
