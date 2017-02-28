$(document).ready(function () {
    var Red1 = 255; var Green1 = 255; var Blue1 = 255;
    var Red2 = 255; var Green2 = 255; var Blue2 = 255;


    /* Top left color */
    $('#R1').on("mousemove", function () {
        Red1 = $(this).val();
        $("#r1").html(Red1)
        background1()
        bottomLeft()
    });

    $('#G1').on("mousemove", function () {
        Green1 = $(this).val();
        $("#g1").html(Green1)
        background1()
        bottomLeft()

    });

    $('#B1').on("mousemove", function () {
        Blue1 = $(this).val();
        $("#b1").html(Blue1);
        background1()
        bottomLeft()

    });

    /* top right color */
    $('#R2').on("mousemove", function () {
        Red2 = $(this).val();
        $("#r2").html(Red2)
        background2()
        bottomLeft()

    });

    $('#G2').on("mousemove", function () {
        Green2 = $(this).val();
        $("#g2").html(Green2)
        background2()
        bottomLeft()
    });

    $('#B2').on("mousemove", function () {
        Blue2 = $(this).val();
        $("#b2").html(Blue2);
        background2()
        bottomLeft()
    });

    /* Gradient */
    /* click button */

    $(".Left").click(function () {
        bottomLeft()
    })

    $(".Right").click(function () {
        bottomRight()
    })

    $(".Radial").click(function () {
        bottomRadial()
    })

    $(".reverse").click(function () {
        bottomReverseRadial()
    })

    /* functions */
    function bottomLeft() {
        $('.bottom').css({
            'background': "linear-gradient(to left, rgb(" + Red1 + "," + Green1 + "," + Blue1 + "), rgb(" + Red2 + "," + Green2 + "," + Blue2 + "))"
        });
    }

    function bottomRight() {
        $('.bottom').css({
            'background': "linear-gradient(to right, rgb(" + Red1 + "," + Green1 + "," + Blue1 + "), rgb(" + Red2 + "," + Green2 + "," + Blue2 + "))"
        });
    }

    function bottomRadial() {
        $('.bottom').css({
            'background-image': "radial-gradient(rgb(" + Red1 + "," + Green1 + "," + Blue1 + "), rgb(" + Red2 + "," + Green2 + "," + Blue2 + "))"
        });
    }

    function bottomReverseRadial() {
        $('.bottom').css({
            'background-image': "radial-gradient(rgb(" + Red2 + "," + Green2 + "," + Blue2 + "), rgb(" + Red1 + "," + Green1 + "," + Blue1 + "))"
        });
    }

    /* ----- */
    function background1() {
        $(".topLeft").css({ 'background-color': 'rgb(' + Red1 + ',' + Green1 + ',' + Blue1 + ')' });
    }
    function background2() {
        $(".topRight").css({ 'background-color': 'rgb(' + Red2 + ',' + Green2 + ',' + Blue2 + ')' });
    }



});