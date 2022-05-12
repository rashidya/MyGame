var selectedCard=null;
var secondSelectedCard=null;
var firstSelectedCard=null;
var selectedImage;
var selectedIcon;
var count=0;
setImages();
var timer;

var firstClick=true;
var music = document.createElement('audio');
music.setAttribute('src','assets/audio/backgroundMusic.mp3');

var select = document.createElement('audio');
select.setAttribute('src','assets/audio/select.wav');
$(".cards").click(function (){

    if(firstClick) {
        timer = setInterval(time, 1000);
        firstClick=false;
    }

    var click = document.createElement('audio');
    click.setAttribute('src','assets/audio/click.wav');
    click.volume=0.3;
    click.play();

    if(selectedCard==null || this!=selectedCard){
        $(this).css('transform','rotateY(180deg)');
        $(this).css('transition','all 1s');
        $(this.firstChild).css('display','block');
        $(this).children('img:nth-child(2)').css('display','none');

        if(this!=selectedCard && selectedCard!=null){

            if( $(this).children('img:nth-child(1)').attr('src')== $(selectedIcon).attr('src')){


                $(this).css('visibility','hidden');
                $(selectedCard).css('visibility','hidden');


             /*   $(this).css('transform','rotateY(0deg)');
                $(this).children('img').css('transition',' visibility 0.5s');
                $(this).css('opacity','52%');
                $(selectedCard).css('opacity','52%');
                $(selectedCard).children('img').css('visibility','hidden');
                $(selectedCard).children('img').css('transition',' all 0.5s');*/

                var positive = document.createElement('audio');
                positive.setAttribute('src','assets/audio/positive.wav');
                positive.volume=0.3;
                positive.play();
                count=count+2;
                secondSelectedCard=null;
                firstSelectedCard=null;
                selectedCard=null;
                if (count===16){
                    console.log('You won')
                    $("#result").css('display','flex');
                    $("#cardPanel").css('display','none');
                    clearInterval(timer);
                }
                return;
            }

            secondSelectedCard=this;
            firstSelectedCard=selectedCard;
            $(document).mousemove(function (){

                $(firstSelectedCard).css('transform','rotateY(0deg)');
                $(firstSelectedCard).css('transition','all 2s');
                $(firstSelectedCard).css('transition-delay','all 2s');
                $(firstSelectedCard).children('img:nth-child(1)').css('display', 'none');
                $(firstSelectedCard).children('img:nth-child(2)').css('display', 'block');
                $(selectedCard).css('transform','rotateY(0deg)');
                $(selectedCard).css('transition','all 2s');
                $(selectedCard).css('transition-delay','all 2s');
                $(selectedCard).children('img:nth-child(1)').css('display','none');
                $(selectedCard).children('img:nth-child(2)').css('display','block');
                var negative = document.createElement('audio');
                negative.setAttribute('src','assets/audio/negative.wav');
                negative.volume=0.3;
                negative.play();
                $(secondSelectedCard).off('mousemove');
                secondSelectedCard=null;
                firstSelectedCard=null;
                selectedCard=null;
                $(document).off('mousemove');
            });



        }

        selectedCard =this;
        selectedImage =$(this).children('img:nth-child(2)');
        selectedIcon =$(this).children('img:nth-child(1)');

    }else{

        $(this).css('transform','rotateY(0deg)');
        $(this).css('transition','all 1s');
        $(this.firstChild).css('display','none');
        $(this).children('img:nth-child(2)').css('display','block');
        selectedCard=null;
    }

});



function setImages(){
    var numbers =[];
    var loop=true;
    var divSet=$(".icon");

    for (let i = 0; i <iconList.length; i++) {
        for (let j = 0; j < 2; j++) {
          while (loop){
                var id=Math.floor(Math.random()*16);

                if (!numbers.includes(id)){
                    $(divSet[id]).attr('src',iconList[i]);
                    numbers.push(id);
                    loop=false;
                }
          }

            loop=true;
        }
    }

}

function time(){
    var height=$("#timer>div").css('height');

    height = parseInt(height)-2;

    $("#timer>div").css('height',height);

    if (height<=250){
        $("#timer>div").css('background-color','#ff7836');
        $("#timer>div").css('transition','background-color 1.5s');
        if (height<=100){
            $("#timer>div").css('background-color','#f62929');
            $("#timer>div").css('transition','background-color 1.5s');
        }


    }

    if (height<=0){
        clearInterval(timer);

        var cards=$(".cards");

        for (let i = 0; i < cards.length; i++) {
            var card=cards[i];
            if ($(card).css('visibility') =='visible'){
                alert('Game Over');
                break;
            }
        }
    }

}

$("#home").click(function (){
    music.play();
    music.volume=0.3;
    select.play();
    select.volume=0.2;

    $("#Main").css('display','block');
    $("#board").css('display','none');

    setTimeout(playMusic,1000)

});
