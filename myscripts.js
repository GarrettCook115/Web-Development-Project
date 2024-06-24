//scripts to customize the scroll box colors and attributes on page 2.//
var button= document.querySelector('button');
var box = document.getElementById('changeMe');

/*can have "button.onclick"here aswell*/
//if else statements depending on the color.,starts at black as stated in the style.css #changeMe id. when called for in page 2 (<div id ="changeMe">...)
function changeColor(){
    if (box.style.background == 'white' ){
    box.style.background ='orange';
}
    else if (box.style.background == 'orange' ){
        box.style.background ='gold';
    }
    else if (box.style.background == 'gold' ){
        box.style.background ='skyblue';
    }
    else{
    box.style.background ='white';
    }
    }


