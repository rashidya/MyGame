var victory = document.createElement('audio');
victory.setAttribute('src','assets/audio/victory.wav');

var gameOver = document.createElement('audio');
gameOver.setAttribute('src','assets/audio/gameOver.wav');


var selectedCard=null;
var secondSelectedCard=null;
var firstSelectedCard=null;
var selectedImage;
var selectedIcon;
var count=0;
var no_of_cards;

var timer;

var countdown;

var firstClick=true;


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
                if (count===no_of_cards){
                    music.pause();
                    victory.play();
                    victory.volume=0.8;
                    music.play();
                    music.volume=0.05;
                    $("#result").css('display','block');
                    $("#panel").css('display','none');
                    $("#timerSection").css('display','none');
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



function setImages(level){

    var numbers =[];
    var loop=true;
    var divSet;

    if (level==1){
        countdown=3;
        no_of_cards=16;
        divSet=$(".icon1");
        for (let i = 0; i <iconList.length; i++) {
            for (let j = 0; j < 2; j++) {
                while (loop){
                    var id=Math.floor(Math.random()* 16);
                    if (!numbers.includes(id)){
                        $(divSet[id]).attr('src',iconList[i]);
                        numbers.push(id);
                        console.log(numbers)
                        loop=false;
                    }
                }

                loop=true;
            }
        }
    }

    if (level==2){
        countdown=2;
        no_of_cards=36;
        divSet=$(".icon2");
        iconList.push('assets/img/star.png');
        for (let k = 0; k < 2; k++) {
            for (let i = 0; i <iconList.length; i++) {
                for (let j = 0; j < 2; j++) {
                    while (loop){
                        var id=Math.floor(Math.random()*36);
                        if (!numbers.includes(id)){
                            $(divSet[id]).attr('src',iconList[i]);
                            numbers.push(id);
                            console.log(numbers)
                            loop=false;
                        }
                    }

                    loop=true;
                }
            }

        }
        iconList.pop();
    }

    if (level==3){
        divSet=$(".icon3");
        countdown=1;
        no_of_cards=64;
        for (let k = 0; k < 4; k++) {
            for (let i = 0; i <iconList.length; i++) {
                for (let j = 0; j < 2; j++) {
                    while (loop){
                        var id=Math.floor(Math.random()* 64);
                        if (!numbers.includes(id)){
                            $(divSet[id]).attr('src',iconList[i]);
                            numbers.push(id);
                            console.log(numbers)
                            loop=false;
                        }
                    }

                    loop=true;
                }
            }

        }
    }

}

function time(){
    var height=$("#timer>div").css('height');

    height = parseInt(height)- countdown;

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
                music.pause();
                gameOver.play();
                gameOver.volume=0.8;
                music.play();
                music.volume=0.05;
                $("#gameOver").css('display','block');
                $("#panel").css('display','none');
                $("#timerSection").css('display','none');
                clearInterval(timer);
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
    $("#Map").css('display','none');
    $("#board").css('display','none');

    setTimeout(playMusic,1000);


});

$("#back").click(function (){
    music.play();
    music.volume=0.3;
    select.play();
    select.volume=0.2;

    $("#Main").css('display','none');
    $("#Map").css('display','block');
    $("#board").css('display','none');

    setTimeout(playMusic,1000)

});

$("#replay").click(function (){

replay();
});

$("#replayGameOver").click(function (){

    replay();
});

function replay(){
    select.play();
    select.volume=0.2;
    $("#Main").css('display','block');
    $("#Map").css('display','none');
    $("#board").css('display','none');

    setTimeout(playMusic,1000)
}

$(".cards").attr('type','button');
