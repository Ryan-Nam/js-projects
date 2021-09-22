'use strict';
// Field Job
// 1. Allocate items (Carrot and Bugs).
// 2. Click Event Handling


import * as sound from './sound.js';

const CARROT_SIZE = 80;

export default class Field {
    constructor(carrotCount, bugCount) {
        
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();

        this.field.addEventListener('click', event => this.onClick(event));
    }

    init() {
        this.field.innerHTML = '';
        this._addItem('carrot', this.carrotCount, 'img/carrot.png');
        this._addItem('bug', this.bugCount, 'img/bug.png');

    }

    setClickListender(onItemClick) {
        this.onItemClick = onItemClick;
    }

    // this is private
    _addItem(className, count, imgPath) {
        // set field size
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - CARROT_SIZE;
        const y2 = this.fieldRect.height - CARROT_SIZE;
    
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
            this.field.appendChild(item);
        }
    }


    onClick(event) {
        const target = event.target;
    if(target.matches('.carrot')){
        target.remove();
        sound.playCarrot();
        this.onItemClick && this.onItemClick('carrot');
    } else if (target.matches('.bug')) {
        this.onItemClick && this.onItemClick('bug');
    }

    }
}


function randomNumber(min, max){
    // Math Object - Random
    return Math.random() * (max-min) + min;
    
}

