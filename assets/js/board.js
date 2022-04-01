var selectedCard;
var selectedImage;
var selectedIcon;
setImages();
$(".cards").click(function (){
    if(this==selectedCard){
        $(this).css('transform','rotateY(0deg)');
        $(this).css('transition','all 1s');
        $(this.firstChild).css('display','none');

    }
    
    $(this).css('transform','rotateY(180deg)');
    $(this).css('transition','all 1s');
    $(this.firstChild).css('display','block');
    $(this).children('img:nth-child(2)').css('display','none');

    $(selectedCard).css('transform','rotateY(0deg)');
    $(selectedImage).css('display','block');
    $(selectedIcon).css('display','none');

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


    selectedCard =this;
    selectedImage =$(this).children('img:nth-child(2)');
    selectedIcon =$(this).children('img:nth-child(1)');

});

function setImages(){
    var numbers =[];
    var loop=true;
    var divSet=$(".icon");

    for (let i = 0; i <iconList.length; i++) {
        console.log(i)
        for (let j = 0; j < 2; j++) {
          while (loop){
                var id=Math.floor(Math.random()*16);

                if (!numbers.includes(id)){
                    $(divSet[id]).attr('src',iconList[i]);
                    numbers.push(id);
                    loop=false;

                    console.log(iconList[i])
                }
          }

            loop=true;
        }
    }

}