function shuffle<Type>(array: Type[]): Type[] {
    const length = array.length;
    let shuffled: Type[] = [];

    for (let index = 0; index < length; index++) {
        shuffled.push(
            ...array.splice(Math.floor(Math.random() * array.length), 1)
        );
    }

    return shuffled;
}

const cards = document.querySelectorAll('.memory-card');

document.querySelector('.memory-cards')
    ?.replaceChildren(...shuffle(Array.from(cards)));
