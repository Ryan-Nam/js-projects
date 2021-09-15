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

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Mouse X: ${x}, Mouse Y: ${y}`);

    verticall.style.left = `${x}px`;
    horizontall.style.top = `${y}px`;
    imgTargett.style.left = `${x}px`;
    imgTargett.style.top = `${y}px`;
    tagg.style.left = `${x}px`;
    tagg.style.top = `${y}px`;

    tagg.innerHTML = `${x}px ${y}px`;
    
});