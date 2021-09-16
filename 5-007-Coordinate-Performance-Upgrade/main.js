// function mouse (event){
//     document.addEventListener('mousemove', (event) => {
//         console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
//         //event.clientX;
//     });
// }

const horizontall = document.querySelector(".horizontal");
const verticall = document.querySelector(".vertical");
const imgTargett = document.querySelector(".imgTarget");
const tagg = document.querySelector(".tag");

addEventListener('load', () => {
    const targetRect = imgTargett.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;


document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Mouse X: ${x}, Mouse Y: ${y}`);

    // left, top is really smelly code.. have to change layout - paint - composition
    // for the better performance only change "composition" is best of best.

    // verticall.style.left = `${x}px`;
    // horizontall.style.top = `${y}px`;
    verticall.style.transform = `translateX(${x}px)`;
    horizontall.style.transform = `translateY(${y}px)`;


    // imgTargett.style.left = `${x}px`;
    // imgTargett.style.top = `${y}px`;
    imgTargett.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;

    // tagg.style.left = `${x}px`;
    // tagg.style.top = `${y}px`;
    tagg.style.transform = `translate(${x}px, ${y}px)`;

    tagg.innerHTML = `${x}px ${y}px`;
    
});
});