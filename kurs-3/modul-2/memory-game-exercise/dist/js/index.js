var _a;
function shuffle(array) {
    const length = array.length;
    let shuffled = [];
    for (let index = 0; index < length; index++) {
        shuffled.push(...array.splice(Math.floor(Math.random() * array.length), 1));
    }
    return shuffled;
}
const cards = document.querySelectorAll('.memory-card');
(_a = document.querySelector('.memory-cards')) === null || _a === void 0 ? void 0 : _a.replaceChildren(...shuffle(Array.from(cards)));
