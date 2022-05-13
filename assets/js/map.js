var music = document.createElement('audio');
music.setAttribute('src','assets/audio/backgroundMusic.mp3');


var select = document.createElement('audio');
select.setAttribute('src','assets/audio/select.wav');

$("#level_1").click(function (){
    music.play();
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


    setTimeout(playMusic,1000);
    setCards();

});

$("#level_2").click(function (){
    music.play();
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

    setTimeout(playMusic,1000);
    setCards();

});

$("#level_3").click(function (){
    music.play();
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

    setTimeout(playMusic,1000);
    setCards();

});

$("#homeMap").click(function (){
    music.play();
    music.volume=0.3;
    select.play();
    select.volume=0.2;

    $("#Main").css('display','block');
    $("#Map").css('display','none');
    $("#board").css('display','none');

    setTimeout(playMusic,1000)

});

function setCards(){
    $(".cards").css('visibility','visible');
    $(".cards").css('transform','rotateY(0deg)');
    $(".cards").children('img:nth-child(1)').css('display', 'none');
    $(".cards").children('img:nth-child(2)').css('display', 'block');

    $("#timer>div").css('height','53.2vh');
    clearInterval(timer);
    firstClick=true;
}