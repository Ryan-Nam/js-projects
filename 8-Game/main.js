'use strict';
// init() 이라는 함수로 당근과 벌레들을 랜덤으로 위치시키기
// 5개씩 만들기

// Get Game field (playground) -> add carrot and bug here
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect(); // get height and width

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 120; // SetInterval, WebAPI use for the Timer  // setInterval until clearInterval

// Get Dom such as Game Button, Timer, Score 
const gameBtn = document.querySelector('.game__button');
const gameTimer =  document.querySelector('.game__timer');
const gameScore =  document.querySelector('.game__score');

// Status
let started = false;
let score = 0;
let timer = undefined;

const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');


gameBtn.addEventListener('click', () => {
    console.log('Ww');
    if (started){
        stopGame();
    } else {
        startGame();
    }
    //change from false to true, || ture to false
    started = !started;
});

// Game Timer
// gameBtn.addEventListener('click', (event)=> {
//     event.preventDefault();
//     let timeleft = 10; 
//     let downloadTimer = setInterval(event => {
//         gameTimer.innerHTML = timeleft;
        
//         timeleft -= 1;
//         if(timeleft < 0){
//             clearInterval(downloadTimer);
//             gameTimer.innerHTML = 'Times up!';
//         }
//     }, 1000);
// })

// Game Start 
function startGame() {
    initGame(); //make randome carrot and bugs
    showStopButton();
    showtimerAndScore();
    startGameTimer();
}

// Time Stop
// display pop up
function stopGame() {
    stopGameTimer();


    

}

function startGameTimer() {
    let remaingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remaingTimeSec);
    timer = setInterval(() => {
        if(remaingTimeSec <= 0) {
            clearInterval(timer);
            return;
        }
        updateTimerText(--remaingTimeSec);
    },1000);
}

function stopGameTimer(){
    clearInterval(timer);
    hideGameButton();
    ShowPopUpWithText('REAPLY???');
}

function updateTimerText(time){
    const minutes = Math.floor(time/60); // 내림
    const seconds = time %60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function ShowPopUpWithText(text) {
    popUpText.innerText = text;
    popUp.classList.remove('pop-up--hide');
    

}



// Create Carrot and Bugs, add into Field
function initGame() {
    field.innerHTML = '';
    gameScore.innerHTML = CARROT_COUNT;
    // console.log(fieldRect);
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}
// Game start -> change button from 'play' to 'pause'
function showStopButton(){
    const icon = gameBtn.querySelector('.fa-play');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function hideGameButton(){
    gameBtn.style.visibility = 'hidden';
}

function showtimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function addItem(className, count, imgPath) {
    // set field size
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;

    // how many item
    for ( let i = 0; i < count; i ++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNumber(min, max){
    // Math Object - Random
    return Math.random() * (max-min) + min;
    
}

initGame();