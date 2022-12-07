var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Memory_instances, _Memory_cards, _Memory_selectedCards, _Memory_clickCard, _Memory_selectCard, _Memory_checkPair, _Memory_restoreCards, _Memory_checkVictory;
var CardState;
(function (CardState) {
    CardState[CardState["Normal"] = 0] = "Normal";
    CardState[CardState["Completed"] = 1] = "Completed";
})(CardState || (CardState = {}));
function createCards() {
    return Array.from(document.querySelectorAll('.memory-card'))
        .map((element) => {
        return {
            value: Number(element.getAttribute('data-card')),
            state: CardState.Normal,
            element: element,
        };
    });
}
class Memory {
    constructor() {
        _Memory_instances.add(this);
        _Memory_cards.set(this, void 0);
        _Memory_selectedCards.set(this, void 0);
        __classPrivateFieldSet(this, _Memory_cards, createCards(), "f");
        this.shuffle();
        __classPrivateFieldSet(this, _Memory_selectedCards, { first: null, second: null }, "f");
        __classPrivateFieldGet(this, _Memory_cards, "f").forEach((card) => {
            card.element.addEventListener('click', () => {
                __classPrivateFieldGet(this, _Memory_instances, "m", _Memory_clickCard).call(this, card);
            });
        });
    }
    shuffle() {
        var _a;
        let copy = [...__classPrivateFieldGet(this, _Memory_cards, "f")];
        let shuffled = [];
        for (let index = 0; index < (copy.length + shuffled.length); index++) {
            shuffled.push(...copy.splice(Math.floor(Math.random() * copy.length), 1));
        }
        (_a = document.querySelector('.memory-cards')) === null || _a === void 0 ? void 0 : _a.replaceChildren(...shuffled.map((card) => card.element));
    }
}
_Memory_cards = new WeakMap(), _Memory_selectedCards = new WeakMap(), _Memory_instances = new WeakSet(), _Memory_clickCard = function _Memory_clickCard(card) {
    if (card.state === CardState.Normal
        && !__classPrivateFieldGet(this, _Memory_selectedCards, "f").second) {
        card.element.classList.add('flip');
        __classPrivateFieldGet(this, _Memory_instances, "m", _Memory_selectCard).call(this, card);
        __classPrivateFieldGet(this, _Memory_instances, "m", _Memory_checkPair).call(this);
    }
}, _Memory_selectCard = function _Memory_selectCard(card) {
    if (!__classPrivateFieldGet(this, _Memory_selectedCards, "f").first) {
        __classPrivateFieldGet(this, _Memory_selectedCards, "f").first = card;
    }
    else if (!__classPrivateFieldGet(this, _Memory_selectedCards, "f").second) {
        __classPrivateFieldGet(this, _Memory_selectedCards, "f").second = card;
    }
}, _Memory_checkPair = function _Memory_checkPair() {
    if (__classPrivateFieldGet(this, _Memory_selectedCards, "f").first && __classPrivateFieldGet(this, _Memory_selectedCards, "f").second) {
        if (__classPrivateFieldGet(this, _Memory_selectedCards, "f").first.value === __classPrivateFieldGet(this, _Memory_selectedCards, "f").second.value) {
            __classPrivateFieldGet(this, _Memory_selectedCards, "f").first.state = CardState.Completed;
            __classPrivateFieldGet(this, _Memory_selectedCards, "f").second.state = CardState.Completed;
            __classPrivateFieldSet(this, _Memory_selectedCards, { first: null, second: null }, "f");
            __classPrivateFieldGet(this, _Memory_instances, "m", _Memory_checkVictory).call(this);
        }
        else {
            __classPrivateFieldGet(this, _Memory_selectedCards, "f").first.state = CardState.Normal;
            __classPrivateFieldGet(this, _Memory_selectedCards, "f").second.state = CardState.Normal;
            setTimeout(() => {
                __classPrivateFieldGet(this, _Memory_instances, "m", _Memory_restoreCards).call(this);
                __classPrivateFieldSet(this, _Memory_selectedCards, { first: null, second: null }, "f");
            }, 1000);
        }
    }
}, _Memory_restoreCards = function _Memory_restoreCards() {
    __classPrivateFieldGet(this, _Memory_cards, "f")
        .filter((card) => card.state !== CardState.Completed)
        .forEach((card) => {
        card.element.classList.remove('flip');
    });
}, _Memory_checkVictory = function _Memory_checkVictory() {
    if (__classPrivateFieldGet(this, _Memory_cards, "f").every((card) => card.state === CardState.Completed)) {
        document.querySelector('.overlay').classList.toggle('show');
    }
};
const memory = new Memory();
