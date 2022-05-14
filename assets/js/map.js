

$("#level_1").click(function (){
    music.play();
    music.volume=0.1;
    select.play();
    select.volume=0.2;
    setImages(1);



    $(".L2,.L3").css('display','none');
    $(".L1").css('display','block');
    $(".cards").css('width','19vh');
    $(".cards").css('height','19vh');
    $(".cards>img").css('width','6vw');



    setBoard();

});

$("#level_2").click(function (){
    music.play();
    music.volume=0.1;
    select.play();
    select.volume=0.2;
    setImages(2);



    $(".L3").css('display','none');
    $(".L2").css('display','block');
    $(".cards").css('width','12vh');
    $(".cards").css('height','12vh');
    $(".cards>img").css('width','4vw');


    setBoard();

});

$("#level_3").click(function (){
    music.play();
    music.volume=0.1;
    select.play();
    select.volume=0.2;
    setImages(3);


    $(".L3").css('display','block');
    $(".cards").css('width','9vh');
    $(".cards").css('height','9vh');
    $(".cards>img").css('width','3vw');

    setBoard();

});

$("#cancel").click(function (){
    music.play();
    music.volume=0.3;
    select.play();
    select.volume=0.2;

    $("#Main").css('display','block');
    $("#Map").css('display','none');
    $("#board").css('display','none');

    setTimeout(playMusic,1000)

});

function setBoard(){
    $("#Main").css('display','none');
    $("#board").css('display','block');
    $("#result").css('display','none');
    $("#panel").css('display','flex');
    $("#timerSection").css('display','flex');
    $(".cards").css('visibility','visible');
    $(".cards").css('transform','rotateY(0deg)');
    $(".cards").children('img:nth-child(1)').css('display', 'none');
    $(".cards").children('img:nth-child(2)').css('display', 'block');

    setTimeout(playMusic,1000);
    $("#timer>div").css('height','53.2vh');
    clearInterval(timer);
    firstClick=true;

}