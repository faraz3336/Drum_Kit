
// function play(){

// }
// var audio=new audio('tom-1.mp3')
// for(var i=0;i<numberofdrumms;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",handleclick1);

// }
var numberofdrumms=document.querySelectorAll(".drum").length;
function handleclick1(){
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
    
}
for(var i=0;i<numberofdrumms;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var innerhtml=this.innerHTML;
        makesound(innerhtml);
        buttonanimation(innerhtml);
        });
    }
document.addEventListener("keydown",function(event){
      makesound(event.key);
      buttonanimation(event.key);
    });
function buttonanimation(key)
{
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);

}
// for(var i=0;i<numberofdrumms;i++){
//     // document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){
function makesound(key){
                switch(key){
                    case 'w':
                        var audio=new Audio('sounds/tom-1.mp3');
                        audio.play(); 
                        break;
                    case 'a':
                        var tom2=new Audio('sounds/tom-2.mp3');
                        tom2.play();
                        break;
                    case 's':
                        var tom3=new Audio('sounds/tom-3.mp3');
                        tom3.play();
                        break;
                    case 'd':
                        var tom4=new Audio('sounds/tom-4.mp3');
                        tom4.play();
                        break;
                    case 'j':
                        var snare=new Audio('sounds/snare.mp3');
                        snare.play();
                        break;
                    case 'k':
                        var crash=new Audio('sounds/crash.mp3');
                        crash.play();
                        break;
                    case 'l':
                        var kick=new Audio('sounds/kick-bass.mp3');
                        kick.play();
                        break;
                }
            }
    
    
    
// addEventListener("keydown",function(event){
//     console.log(event.key);
// })

// document.querySelectorAll("button")[1].addEventListener("click",handleclick);
// document.querySelectorAll("button")[2].addEventListener("click",handleclick);
// document.querySelectorAll("button")[3].addEventListener("click",handleclick);
// document.querySelectorAll("button")[4].addEventListener("click",handleclick);
// document.querySelectorAll("button")[5].addEventListener("click",handleclick);
// document.querySelectorAll("button")[6].addEventListener("click",handleclick);

function handleclick(){
alert("It's a click");
}