let gameSeq=[];
let userSeq=[];


let btns =['yellow' ,'red','purple', 'green'];


let started = false;
let level = 0;
let h2 =document.querySelector("h2"); 
//game start on keypress
//gives white color flash
document.addEventListener("keypress" , function(){
    if (started == false){
        console.log("game started");
        started = true;   
        levelUp();
    }
});
//flashbtn 
//gives green color flash
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
        } , 500);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( function(){
        btn.classList.remove("userFlash");
        } , 500);
}


//level up the game
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `level ${level}`;

    let randomIndx = Math.floor(Math.random() *3);
    let randomclr = btns[randomIndx];
    let randombtn = document.querySelector( `.${randomclr}`);
    // console.log(randomIndx);
    // console.log(randombtn);
    // console.log(randomclr);
    gameSeq.push(randomclr);
    console.log(gameSeq);
    gameFlash(randombtn);

}

function checkAns(indx){
    console.log("curr level : " , level);

    if(userSeq[indx] === gameSeq[indx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
        
    }else{
        h2.innerHTML = `game over ! your score was <b> ${level} <b/> press any key to start`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor = "white";
        } , 150);
        reset();
    }
}


function btnpress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    console.log(userColor); 
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click" , btnpress);
}

function reset(){
    started == false;
    gameSeq=[];
    userSeq=[];
    level =0;
}