$(document).ready(function () {
    let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 200,
        mobile: true,
        live: true
    })
    wow.init();

    $(window).scroll(function (){
        $(this).scrollTop() > 0 ? $('header').css('background', '#25252d') : $('header').css('background', 'none')
    });

    $('.center-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        responsive: {
            breakpoint: 670,
            settings: [{
                arrows: false
            }]
        }
    });

    $('.menu_icon').click(function () {
        $('#menu').toggle("slow");
    });
    $('.close').click(function () {
        $('#menu').hide();
    });


    $('.menu_item, .contact').click(function () {
        $('#menu').hide();
    })


    const point = $('.point');
    point.mouseenter(function () {
        $(this).closest('.house_info').find('.hidden').css('display', 'block')
    });
    point.mouseleave(function () {
        $(this).closest('.house_info').find('.hidden').css('display', 'none');
    });

    $('.contact_call > a, #more, .advice').click(function (event) {
        event.preventDefault()
        $('#consultation')[0].scrollIntoView({behavior: "smooth", block: "center"});
    })

    $('.scroll').click(function (event) {
        $('#projects')[0].scrollIntoView({behavior: "smooth", block: "start"});
    })

    $('.more > a').click(function (event) {
        event.preventDefault()
        $('.project_hide').show("slow");
        $('.more > a').hide()
    })

    $('#tel').mask("+380 (99) 99-99-999");
    $('#tel2').mask("+380 (99) 99-99-999");
    $('#name').mask("");


    $('.project_one > img').magnificPopup({
        items: [
            {
                src: '../images/project1_max.png',
            },
            {
                src: '../images/project1_min.png',
            },
            {
                src: 'images/project1_min2.png'
            },
            {
                src: 'images/project1_min3.png'

            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('.project_two > img').magnificPopup({
        items: [
            {
                src: '../images/project2_max.png',
            },
            {
                src: '../images/project1_min.png',
            },
            {
                src: 'images/project1_min2.png'
            },
            {
                src: 'images/project1_min3.png'

            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    let loader = $('.loader')
    $('#button').click(function () {
        let name = $('#name')
        let tel = $('#tel')
        let form = $('#form')
        let message = $('#msg-success')

        let hasError = false;
        $('.error-input').hide()
        $('input').css('border-color', 'white')


        if (!name.val()) {
            name.css('border-color', '#e00f33')
            name.next().show();
            hasError = true;
        }

        if (!tel.val()) {
            tel.css('border-color', '#e00f33')
            tel.next().show();
            hasError = true;
        }


        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), tel: tel.val()}
            })
                .done(function (msg) {
                    loader.hide()
                    if (msg.success) {
                        form[0].reset();
                        form.hide();
                        message.css({
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        });
                        setTimeout(() => {
                            form.show();
                            message.hide();
                        }, 2000);

                    } else {
                        alert('Возникла ошибка при вводе данных, позвоните нам +380 (96) 73-67-281!')
                        form[0].reset()
                    }
                });
        }
    })

    $('#btn_registration').click(function () {
        $('#popup').css("display", "flex");
    });
    $('.close_popup').click(function () {
        $('#popup').hide("slow")
    });


    $('#button2').click(function () {
        let name = $('#name2')
        let tel = $('#tel2')

        let form = $('#form2')
        let message = $('#msg-success2')

        let hasError = false;
        $('.error-input').hide()
        $('input').css('border-color', 'white')


        if (!name.val()) {
            name.css('border-color', '#e00f33')
            name.next().show();
            hasError = true;
        }

        if (!tel.val()) {
            tel.css('border-color', '#e00f33')
            tel.next().show();
            hasError = true;
        }


        if (!hasError) {
            $('.loader').css('display', 'flex')
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), tel: tel.val()}
            })
                .done(function (msg) {
                    loader.hide()
                    if (msg.success) {
                        form[0].reset();
                        form.hide();
                        message.css({
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        });
                        setTimeout(() => {
                            form.show();
                            message.hide();
                        }, 2000);

                    } else {
                        alert('Возникла ошибка при вводе данных, позвоните нам +380 (96) 73-67-281!')
                        form[0].reset()
                    }
                });
        }
    })


    $('.download, .advice').mouseenter(function () {
        $(this).addClass('hvr-grow-shadow').css('display', 'block')
    })
    $(' .advantage_img, .point, .btn').mouseenter(function () {
        $(this).addClass('hvr-grow-shadow')
    })

});