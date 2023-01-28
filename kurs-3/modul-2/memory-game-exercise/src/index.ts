interface Card {
  value: number,
  paired: boolean,
  element: Element,
}

class Memory {
  private cards: Card[];
  private selectedCards: [Card | null, Card | null];

  constructor() {
    this.cards = Array.from(document.querySelectorAll('.memory-card'))
      .map((element): Card => {
        return {
          value: Number(element.getAttribute('data-card')),
          paired: false,
          element: element,
        };
      });

    this.shuffleCards();
    this.selectedCards = [null, null];

    this.cards.forEach((card) => {
      card.element.addEventListener('click', () => this.clickCard(card));
    });

    document.querySelector('.overlay > .close')
      .addEventListener('click', () => {
        document.querySelector('.overlay').classList.toggle('show');
        memory.restart();
      });
  }

  restart(): void {
    this.shuffleCards();
    this.cards.forEach((card) => card.paired = false);
    this.restoreCards();
  }

  private shuffleCards(): void {
    const copy = [...this.cards];

    const shuffled: Card[] = this.cards.flatMap(() =>
      copy.splice(Math.floor(Math.random() * copy.length), 1)
    );

    document.querySelector('.memory-cards')
      .replaceChildren(...shuffled.map((card) => card.element));
  }

  private clickCard(card: Card): void {
    // if (!card.paired && this.selectedCards.includes(null)) {
    if (!card.paired && !this.selectedCards[1]) {
      card.element.classList.add('flip');
      this.selectCard(card);
      this.compareCards();
    }
  }

  private selectCard(card: Card): void {
    if (!this.selectedCards.includes(card)) {
      this.selectedCards = [card, this.selectedCards[0]];
    }
  }

  private compareCards(): void {
    // if (!this.selectedCards.includes(null)) {
    if (this.selectedCards[1]) {
      if (this.selectedCards[0].value === this.selectedCards[1].value) {
        this.selectedCards.forEach((card) => card.paired = true);
        this.selectedCards = [null, null];
        this.checkVictory();
      } else {
        setTimeout(() => {
          this.selectedCards = [null, null];
          this.restoreCards();
        }, 1000);
      }
    }
  }

  private restoreCards(): void {
    this.cards
      .filter((card) => card.paired === false)
      .forEach((card) => card.element.classList.remove('flip'));
  }

  private checkVictory(): void {
    if (this.cards.every((card) => card.paired === true)) {
      document.querySelector('.overlay').classList.toggle('show');
    }
  }
}

const memory = new Memory();
