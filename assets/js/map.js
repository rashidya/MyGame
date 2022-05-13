$("#level_1").click(function (){
    music.pause();
    music.volume=0.1;
    select.play();
    select.volume=0.2;
    setImages(1);


    $("#Main").css('display','none');
    $("#board").css('display','block');
    $(".L2,.L3").css('display','none');
    $(".L1").css('display','block');
    $(".cards").css('width','19vh');
    $(".cards").css('height','19vh');
    $(".cards>img").css('width','6vw');


    setTimeout(playMusic,1000)

});

$("#level_2").click(function (){
    music.pause();
    music.volume=0.1;
    select.play();
    select.volume=0.2;
    setImages(2);


    $("#Main").css('display','none');
    $("#board").css('display','block');
    $(".L3").css('display','none');
    $(".L2").css('display','block');
    $(".cards").css('width','12vh');
    $(".cards").css('height','12vh');
    $(".cards>img").css('width','4vw');

    setTimeout(playMusic,1000)

});

$("#level_3").click(function (){
    music.pause();
    music.volume=0.1;
    select.play();
    select.volume=0.2;
    setImages(3);

    $("#Main").css('display','none');
    $("#board").css('display','block');
    $(".L3").css('display','block');
    $(".cards").css('width','9vh');
    $(".cards").css('height','9vh');
    $(".cards>img").css('width','3vw');

    setTimeout(playMusic,1000)

});