var img1 = 0;
var img2 = -400;
var img3 = -800;
$(document).ready(function(){

    $("#icon-next").click(function(){
        if(img1==800){
            img1=-400;
        }
        img1=img1+400;
        $("#slide-1").css("left",img1+"px");

        if(img2==400){
            img2=-800;
        }
        img2=img2+400;
        $("#slide-2").css("left",img2+"px");
            
        if(img3==0){
            img3=-1200;
        }
        img3=img3+400;
        $("#slide-3").css("left",img3+"px");
            
    });

    $("#icon-back").click(function(){
        if(img1==0){
            img1=1200;
        }
        img1=img1-400;
        $("#slide-1").css("left",img1+"px");

        if(img2==-400){
            img2=800;
        }
        img2=img2-400;
        $("#slide-2").css("left",img2+"px");
        
        if(img3==-800){
            img3=400;
        }
        img3=img3-400;
        $("#slide-3").css("left",img3+"px");

    });
    
});