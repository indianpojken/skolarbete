class Memory {
    constructor(cards) {
        this.cards = cards;
        this.shuffleCards();
        this.selectedCards = [null, null];
        this.cards.forEach((card) => {
            card.element.addEventListener('click', () => this.clickCard(card));
        });
    }
    restart() {
        this.shuffleCards();
        this.cards.forEach((card) => card.paired = false);
        this.restoreCards();
    }
    shuffleCards() {
        const copy = [...this.cards];
        const shuffled = this.cards.flatMap(() => copy.splice(Math.floor(Math.random() * copy.length), 1));
        document.querySelector('.memory-cards')
            .replaceChildren(...shuffled.map((card) => card.element));
    }
    clickCard(card) {
        // if (!card.paired && this.selectedCards.includes(null)) {
        if (!card.paired && !this.selectedCards[1]) {
            card.element.classList.add('flip');
            this.selectCard(card);
            this.compareCards();
        }
    }
    selectCard(card) {
        if (!this.selectedCards.includes(card)) {
            this.selectedCards = [card, this.selectedCards[0]];
        }
    }
    compareCards() {
        // if (!this.selectedCards.includes(null)) {
        if (this.selectedCards[1]) {
            if (this.selectedCards[0].value === this.selectedCards[1].value) {
                this.selectedCards.forEach((card) => card.paired = true);
                this.selectedCards = [null, null];
                this.checkVictory();
            }
            else {
                setTimeout(() => {
                    this.selectedCards = [null, null];
                    this.restoreCards();
                }, 1000);
            }
        }
    }
    restoreCards() {
        this.cards
            .filter((card) => card.paired === false)
            .forEach((card) => card.element.classList.remove('flip'));
    }
    checkVictory() {
        if (this.cards.every((card) => card.paired === true)) {
            document.querySelector('.overlay').classList.toggle('show');
        }
    }
}
const cards = Array.from(document.querySelectorAll('.memory-card'))
    .map((element) => {
    return {
        value: Number(element.getAttribute('data-card')),
        paired: false,
        element: element,
    };
});
const memory = new Memory(cards);
document.querySelector('.overlay > .close')
    .addEventListener('click', () => {
    document.querySelector('.overlay').classList.toggle('show');
    memory.restart();
});
