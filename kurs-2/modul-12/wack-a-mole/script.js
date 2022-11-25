class Mole {
    #state;
    #hole;
    #holes;
    #animationSpeed;

    constructor(state, animationSpeed) {
        this.#state = state;
        this.#holes = document.querySelectorAll('main article');
        this.#animationSpeed = animationSpeed;
        this.hit = () => this.#hit(); // for removeEventListener
    }

    peek() {
        const hole = Math.floor(Math.random() * this.#holes.length);
        this.#hole = document.querySelector(`[data-id="${hole}"]`);
        this.#hole.classList.add('mole');
        this.#hole.addEventListener('click', this.hit);
    }

    hide() {
        this.#hole.classList.remove('mole');
        this.#hole.removeEventListener('click', this.hit);
    }

    #hit() {
        document.querySelector('.moleswhacked b').innerHTML = ++this.#state.score;
        this.#hole.classList.add('hit');
        this.hide();
        setTimeout(() => { this.#hole.classList.remove('hit'); }, this.#animationSpeed);
    }
}

class Game {
    #speed;
    #appearanceSpeed;
    #state;
    #mole;

    constructor(speed = 2000, appearanceSpeed = 800) {
        this.#state = {};
        this.#mole = new Mole(this.#state, appearanceSpeed);
        this.#speed = speed;
        this.#appearanceSpeed = appearanceSpeed;
    }

    start() {
        this.#state.score = 0;
        this.#state.time = 60;
        this.#state.loop = setInterval(() => this.#loop(), this.#speed);
        this.#state.timer = setInterval(() => this.#timer(), 1000);
    }

    restart() {
        document.querySelector('footer').classList.toggle('hidden');
        
        this.start();

        document.querySelector('.moleswhacked b').innerHTML = this.#state.score;
        document.querySelector('.timeleft b').innerHTML = `${this.#state.time}s`;
    }

    #loop() {
        this.#mole.peek();
        setTimeout(() => this.#mole.hide(), this.#appearanceSpeed);
    }

    #endGame() {
        this.#mole.hide();

        clearInterval(this.#state.timer);
        clearInterval(this.#state.loop);

        document.querySelector('footer').classList.toggle('hidden');
        document.querySelector('.scored').innerHTML =
            `You whacked <b>${this.#state.score}</b> moles in 60 sec.`;
    }

    #timer() {
        if (this.#state.time >= 0) {
            document.querySelector('.timeleft b').innerHTML = `${this.#state.time--}s`;
        } else {
            this.#endGame();
        }
    }
}

const game = new Game();
game.start();
document.querySelector('footer button').addEventListener('click', () => game.restart());
