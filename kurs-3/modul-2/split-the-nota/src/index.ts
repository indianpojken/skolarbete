function calculateTip(sum: number, tip: number): number {
    return sum * tip;
}

function divideTotal(total: number, numberOfFriends: number): number {
    return total / numberOfFriends;
}

function showDividedSum(sum: number): void {
    document.getElementById('friendSum').innerHTML = sum + ' kr';
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
}

document
    .getElementById('calculateButton')
    .addEventListener('click', (): void => {
        const sum: number =
            Number((document.getElementById('sum') as HTMLInputElement).value);

        const tip: number =
            Number((document.getElementById('tip') as HTMLInputElement).value);

        const numberOfFriends: number =
            Number((document.getElementById('numberOfFriends') as HTMLInputElement).value);

        const calculatedTip: number = calculateTip(sum, tip);
        const sumDivided: number = divideTotal(sum + calculatedTip, numberOfFriends);
        
        showDividedSum(sumDivided);
    });
