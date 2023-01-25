function calculateTip(sum, tip) {
    return sum * tip;
}
function divideTotal(total, numberOfFriends) {
    return total / numberOfFriends;
}
function showDividedSum(sum) {
    document.getElementById('friendSum').innerHTML = sum + ' kr';
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
}
document
    .getElementById('calculateButton')
    .addEventListener('click', () => {
    const sum = Number(document.getElementById('sum').value);
    const tip = Number(document.getElementById('tip').value);
    const numberOfFriends = Number(document.getElementById('numberOfFriends').value);
    const calculatedTip = calculateTip(sum, tip);
    const sumDivided = divideTotal(sum + calculatedTip, numberOfFriends);
    showDividedSum(sumDivided);
});
