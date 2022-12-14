const book = {
    title: 'Ropa varg',
    author: 'Nille C Nilsson',
    numPages: 312,
};
const books = [
    book,
    {
        title: 'Spindeln',
        author: 'Lars Kepler',
        numPages: 255,
    },
    {
        title: 'Åren',
        author: 'Annie Ernaux',
        numPages: 279,
    },
];
function searchBook(books, title) {
    var _a;
    return (_a = books.find((book) => book.title === title)) !== null && _a !== void 0 ? _a : null;
}
console.log(searchBook(books, 'Ropa varg'));
