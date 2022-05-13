var music = document.createElement('audio');
music.setAttribute('src','assets/audio/backgroundMusic.mp3');
music.loop=true;


var select = document.createElement('audio');
select.setAttribute('src','assets/audio/select.wav');

/*var loading = document.createElement('video');
loading.setAttribute('src','assets/audio/loader.mp4');
loading.setAttribute('width','100vw');
loading.setAttribute('height','100vh');*/

$("#play").click(function (){
    music.play();
    music.volume=0.3;
    select.play();
    select.volume=0.2;

    $("#Main").css('display','none');
    $("#Map").css('display','block');
    $("#board").css('display','none');

   setTimeout(playMusic,1000)

});

$(window).on('load',function (){
    music.volume=0.2;
    music.play();
    loading.play();
});

function playMusic(){
  /*  music.play();*/
}
