$('.slider').slick({
    centerMode: true,
    autoplay: false,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
});






$('.slider-t').slick({
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: '60px',
    centerPadding: '0',
    slidesToShow: 1,
});


$('.about-barand').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 521,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});






$(".images img").click(function () {
    $("#full-image").attr("src", $(this).attr("src"));
    $('#image-viewer').show();
});

$("#image-viewer .close").click(function () {
    $('#image-viewer').hide();
});