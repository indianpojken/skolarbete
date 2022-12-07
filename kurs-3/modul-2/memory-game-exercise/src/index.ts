enum CardState {
    Normal,
    Flipped,
    Completed,
}

interface Card {
    value: number,
    state: CardState,
    element: Element,
}

function createCards(): Card[] {
    return Array.from(document.querySelectorAll('.memory-card'))
        .map((element): Card => {
            return {
                value: Number(element.getAttribute('data-card')),
                state: CardState.Normal,
                element: element,
            }
        });
}

class Memory {
    #cards: Card[];
    #selectedCards: { first: Card | null, second: Card | null };

    constructor() {
        this.#cards = createCards();
        this.shuffle();
        this.#selectedCards = { first: null, second: null };

        this.#cards.forEach((card) => {
            card.element.addEventListener('click', () => {
                this.#clickCard(card);
            });
        });
    }

    shuffle(): void {
        let copy = [...this.#cards];
        let shuffled: Card[] = [];

        for (let index = 0; index < (copy.length + shuffled.length); index++) {
            shuffled.push(
                ...copy.splice(Math.floor(Math.random() * copy.length), 1)
            );
        }

        document.querySelector('.memory-cards')
            ?.replaceChildren(...shuffled.map((card) => card.element));
    }

    #clickCard(card: Card): void {
        if (card.state === CardState.Normal
            && !this.#selectedCards.second) {
            card.state = CardState.Flipped;
            card.element.classList.add('flip');
            this.#selectCard(card);
            this.#checkPair();
        }
    }

    #selectCard(card: Card): void {
        if (!this.#selectedCards.first) {
            this.#selectedCards.first = card;
        } else if (!this.#selectedCards.second) {
            this.#selectedCards.second = card;
        }
    }

    #checkPair() {
        if (this.#selectedCards.first && this.#selectedCards.second) {
            if (this.#selectedCards.first.value === this.#selectedCards.second.value) {
                this.#selectedCards.first.state = CardState.Completed;
                this.#selectedCards.second.state = CardState.Completed;

                this.#selectedCards = { first: null, second: null };

                this.#checkVictory();
            } else {
                this.#selectedCards.first.state = CardState.Normal;
                this.#selectedCards.second.state = CardState.Normal;

                setTimeout(() => {
                    this.#restoreCards();
                    this.#selectedCards = { first: null, second: null };
                }, 1000);
            }
        }
    }

    #restoreCards(): void {
        this.#cards
            .filter((card) => card.state !== CardState.Completed)
            .forEach((card) => {
                card.element.classList.remove('flip');
            });
    }

    #checkVictory(): void {
        if (this.#cards.every((card) => card.state === CardState.Completed)) {
            document.querySelector('.overlay').classList.toggle('show');
        }
    }
}

const memory = new Memory();
