const btn = document.querySelector('.control__btn');
const icon = document.querySelector('i');


const carrotImg = document.querySelector('.carrorImg');
const bugImg = document.querySelector('.bugImg');

btn.addEventListener('click', (event) => {
    // changeBtn();
    event.preventDefault();
    

    let timeleft = 10; 
    let downloadTimer = setInterval(evetn => {
        document.querySelector('.timer').innerHTML = timeleft;
        
        timeleft -= 1;
        if(timeleft < 0){
            clearInterval(downloadTimer);
            document.querySelector('.timer').innerHTML = 'Times up!';
        }
    }, 1000);
})

// function changeBtn(){
//     if(icon.classList.contains('fas fa-play')){
//         icon.classList.remove('fas fa-play');
//         icon.classList.add('fas fa-pause');
//         btn.innerHTML = 'Hide';
//     } else {
//         icon.classList.remove('fas fa-pause');
//         icon.classList.add('fas fa-play');
//         btn.innerHTML = 'Show';
//     }
// }

carrotImg.addEventListener('click', (event) => {
    event.preventDefault();
    carrotImg.remove();
})