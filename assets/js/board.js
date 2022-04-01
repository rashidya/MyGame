var selectedCard=null;
var selectedImage;
var selectedIcon;
setImages();
$(".cards").click(function (){
    $(selectedCard).off('mouseout');
    if(selectedCard==null || this!=selectedCard){
        $(this).css('transform','rotateY(180deg)');
        $(this).css('transition','all 1s');
        $(this.firstChild).css('display','block');
        $(this).children('img:nth-child(2)').css('display','none');

        if(this!=selectedCard && selectedCard!=null){

            if( $(this).children('img:nth-child(1)').attr('src')== $(selectedIcon).attr('src')){
                console.log(2)
                $(this).css('visibility','hidden');
                $(selectedCard).css('visibility','hidden');
            }else {
                console.log(3)
                console.log($(selectedIcon).attr('src'))
                console.log($(this).children('img:nth-child(1)').attr('src'));

                   /* $(this).css('transform','rotateY(0deg)');
                    $(this).css('transition','all 1s');
                    $(this).css('transition-delay','all 1s');
                    $(this.firstChild).css('display','none');
                    $(this).children('img:nth-child(2)').css('display', 'block');
                    $(selectedCard).css('transform','rotateY(0deg)');
                    $(selectedCard).css('transition','all 2s');
                    $(selectedCard).css('transition-delay','all 2s');
                    $(selectedCard).children('img:nth-child(1)').css('display','none');
                    $(selectedCard).children('img:nth-child(2)').css('display','block');*/


            }


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



/*    if(this.firstChild.attr('src')==selectedImage.attr('src')){
        $(selectedCard).css('display','none)');

        $(this).css('display','none');

    }else{
        $(selectedCard).css('transform','rotateY(0deg)');
        $(selectedImage).attr('src','assets/icon/wings.png');
        $(this).css('transform','rotateY(0deg)');
        $(this.firstChild).attr('src','assets/icon/wings.png');
    }
    */



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