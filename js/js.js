$('.sl').slick({
    infinite: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img src='img/arrow_pointing_left.png' class='prev' alt='1' height='30'>",
    nextArrow: "<img src='img/arrow_pointing_right.png' class='next' alt='2' height='30'>",
    responsive: [
        {
            breakpoint: 1225,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 880,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 810,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 570,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.sl_trophy').slick({
    infinite: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img src='img/icons8-back-50.png' class='prev_trophy' alt='1' height='30'>",
    nextArrow: "<img src='img/icons8-forward-50.png' class='next_trophy' alt='2' height='30'>",
    responsive: [
        {
            breakpoint: 1225,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 880,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 810,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 570,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});