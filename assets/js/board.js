var selectedCard=null;
var secondSelectedCard=null;
var firstSelectedCard=null;
var selectedImage;
var selectedIcon;
var count=0;
setImages();
$(".cards").click(function (){

    if(selectedCard==null || this!=selectedCard){
        $(this).css('transform','rotateY(180deg)');
        $(this).css('transition','all 1s');
        $(this.firstChild).css('display','block');
        $(this).children('img:nth-child(2)').css('display','none');

        if(this!=selectedCard && selectedCard!=null){

            if( $(this).children('img:nth-child(1)').attr('src')== $(selectedIcon).attr('src')){
                $(this).css('visibility','hidden');
                $(selectedCard).css('visibility','hidden');
                count=count+2;
                secondSelectedCard=null;
                firstSelectedCard=null;
                selectedCard=null;
                if (count===16){
                    console.log('You won')
                    $("#result").css('display','flex');
                    $("#cardPanel").css('display','none');
                }
                return;
            }

            secondSelectedCard=this;
            firstSelectedCard=selectedCard;
            $(secondSelectedCard).mousemove(function (){

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
                $(secondSelectedCard).off('mousemove');
                secondSelectedCard=null;
                firstSelectedCard=null;
                selectedCard=null;
               });

        }

        selectedCard =this;
        selectedImage =$(this).children('img:nth-child(2)');
        selectedIcon =$(this).children('img:nth-child(1)');

    }else{
        console.log(1)
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