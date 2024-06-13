var button= document.querySelector('button');
var box = document.getElementById('changeMe');

/*can have "button.onclick"here aswell*/
function changeColor(){
    if (box.style.background == 'black' ){
    box.style.background ='white';
}
    else if (box.style.background == 'white' ){
        box.style.background ='gold';
    }
    else if (box.style.background == 'gold' ){
        box.style.background ='skyblue';
    }
    else{
    box.style.background ='black';
    }
    }


