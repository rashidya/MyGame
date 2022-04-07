var music = document.createElement('audio');
music.setAttribute('src','assets/audio/backgroundMusic.mp3');

var select = document.createElement('audio');
select.setAttribute('src','assets/audio/select.wav');

/*var loading = document.createElement('video');
loading.setAttribute('src','assets/audio/loader.mp4');
loading.setAttribute('width','100vw');
loading.setAttribute('height','100vh');*/

$("#play").click(function (){
    music.pause();
    music.volume=0.1;
    select.play();

    $("#Main").css('display','none');
    $("#board").css('display','block');

   setTimeout(playMusic,1000)

});

$(window).on('load',function (){
    music.volume=0.3;
    music.play();
  /*  loading.play();*/
});

function playMusic(){
    music.play();
}