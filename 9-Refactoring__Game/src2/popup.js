// 'use strict';
// export == outside can also see this class -> go to main.js -> import
// type="module" in html
export default class PopUp {
    constructor() {
        // Member variable
        this.popUp = document.querySelector('.pop-up');
        this.popUpText = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');

        this.popUpRefresh.addEventListener('click', () => {
            // this.onClick = Member variable
            this.onClick && this.onClick();
            this.hide();
        });
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    ShowWithText(text) {
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop-up--hide');
    }

    hide() {
        this.popUp.classList.add('pop-up--hide');
    }
}