$(function(){

    // JQuery ui 頁籤效果
    $( "#tabs" ).tabs();


    // 滑鼠變換影像
    $('.hover-image').hover(
    function(){
    // 滑鼠移入時更換圖片
    var hoverSrc = $(this).data('hover');
    $(this).attr('data-default', $(this).attr('src')); // 儲存原始圖片
    $(this).attr('src', hoverSrc);
    },
    function(){
    // 滑鼠移出時還原圖片
    var hoverSrc = $(this).attr('data-default');
    $(this).attr('src', hoverSrc);
    });

});

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'disableScrolling': true
})

$(function(){
    // 滑動到指定位置
    $('.menu a').click(function(){
        let btn = $(this).attr('href');
        let pos = $(btn).offset();
        $('html,body').animate({scrollTop:pos.top},1000);
    });


    // 滑動至頂
    $('#goTop').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });


    // 指定卷軸位置淡出淡入
    // $(window).scroll(function(){
    //     if($(this).scrollTop() > 200 ){
    //         $('#goTop').fadeIn();
    //     }else{
    //         $('#goTop').fadeOut();
    //     }
    // });

    // FadeTo 較為穩定，不售其他干擾影響，需寫參數
    $(window).scroll(function(){
        if($(this).scrollTop() > 200 ){
            $('#goTop').stop().fadeTo('fast',1);
        }else{
            $('#goTop').stop().fadeOut('fast');
        }
    });

    // 平板移除背景影片，避免網路爆掉!撥放影片不用，使用者可以自己決定要不要撥。
    if($(window).width() <= 820){
        $('#about video').remove();
    }
    // remove是真的移除!影片不存在。
    // display:none則是影片還在用你的流量，但是你看不到

    // 手機版移除玻璃擬態
    // if($(window).width() <= 640){
    //     $('.navigation .glassmorphism').removeClass('glassmorphism');
    // }

    // 手機版加入玻璃擬態
    if($(window).width() <= 640){
        $('.navigation').addClass('glassmorphism');
    }

    //漢堡按鈕交替顯示 
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });


});

// 不要放在documentGetready $();裡面，會不穩定
// 請用jq smoove 及共用設定
$('.smoove').smoove({
    offset : '20%'/* 15~20%是常用範圍 */
});

// 透視載入
$('.smoove-z').smoove({
    moveZ : '-500px',
    rotateX : '90deg',
    moveY : '100px'
});
