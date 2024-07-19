$(document).ready(function() {
    $('a[href="#"]').click(function (event) {
        event.preventDefault();
    });

    $('.gnb').mouseenter(function() {
        $('.depth2_bg').stop().animate({
        height: 300
        }),
        $('.depth2').fadeIn(500)
    })

    $('.gnb').mouseleave(function() {
        $('.depth2_bg').stop().animate({
        height: 0
        }),
        $('.depth2').fadeOut(100)
    })

    let windowWidth = $( window ).width();
    if(windowWidth < 441) {
        //reset
        $('.gnb').mouseenter(function() {
            $('.depth2_bg').stop().animate({
                height: 0
            }),
            $('.depth2').hide()
        })
        $('.gnb').mouseleave(function() {
            $('.depth2_bg').stop().animate({
                height: 0
            }),
            $('.depth2').hide()
        })

        //440이하 적용
        $('.mobile_btn').on('click', function() {
            $(this).toggleClass('on')

            if($(this).hasClass('on')) {
                $('.depth2_bg').stop().animate({
                    height: '350px'
                })
                $('.gnb').fadeIn(1000)
                $('header .gnb > li > a').click(function() {
                    $('.mobile_btn').removeClass('on')
                    $('.gnb').fadeOut(100)
                })
                $('.mobile_btn').find('path').attr({
                    d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                })
            } else {
                $('.depth2_bg').stop().animate({
                    height: 0
                })
                $('.gnb').fadeOut(100)
                $('.mobile_btn').find('path').attr({
                    d: "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                })
            }
        })
        
    } 

})