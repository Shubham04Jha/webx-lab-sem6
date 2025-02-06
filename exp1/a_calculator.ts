


function calc(op: string, num1: number, num2: number): number | never {
    if (op === 'add') {
        return num1 + num2;
    } else if (op === 'sub') {
        return num1 - num2;
    } else if (op === 'mult') {
        return num1 * num2;
    } else if (op === 'div') {
        if (num2 === 0) {
            throw new Error('Cannot divide by zero'); 
        }
        return num1 / num2;
    } else {
        throw new Error('Unknown operation'); 
    }
}

function display(res: any): void {
    console.log('Result:', res);
}

try {
    let res = calc('add', 10, 5);
    display(res);

    res = calc('div', 10, 0); 
    display(res);
} catch (error) {
    console.error(error.message);
}