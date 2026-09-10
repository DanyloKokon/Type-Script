function Type() {
    let age: number = 50;
    let name: string = 'Max';
    let toggle: boolean = true;
    let empty: null = null;
    let notInitialize: undefined = undefined;

    //==========================

    let anything: any = -20;
    anything = 'Text';
    anything = {};

    //================================
    let person: [string, number] = ['Max', 21];

    let constant: string | number = 0;
    let literal: 'enable' | 'disable' = 'enable';

    //====================================
    function showMessage(message: string): void {
        console.log(message);
    }

    function calc(num1: number, num2: number): number {
        return num1 + num2;
    }

    function customError(): never {
        throw new Error('Error');
    }
    console.log(age, name, toggle, empty, notInitialize, anything, person, constant, literal);
    showMessage('Example message');
    console.log(calc(1, 2));
    void customError;
    return null;
}

export default Type;