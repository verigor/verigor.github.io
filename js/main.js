$(function () {

    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    });

});