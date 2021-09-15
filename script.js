// // document.getElementById("p2").style.left="120px";
// // document.getElementById("p1").style.top="120px";

// var x;
// function position(){
// document.getElementById("1").value=document.getElementById("p2").style.left;


// }

let ball = document.querySelector('.ball');
let move = 10;

window.addEventListener('load', () => {
    ball.style.position = 'absolute';
    ball.style.left = 0;
    ball.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            ball.style.left = parseInt(ball.style.left) - move + 'px';
            break;
        case 'ArrowRight':
            ball.style.left = parseInt(ball.style.left) + move + 'px';
            break;
        case 'ArrowUp':
            ball.style.top = parseInt(ball.style.top) - move + 'px';
            break;
        case 'ArrowDown':
            ball.style.top = parseInt(ball.style.top) + move + 'px';
            break;
    }
});