
import './App.css'

function App() {
  let age: number = 50;
  let name: string = 'Max';
  let toggle: boolean = true;
  let empty: null = null;
  let notInitialize: undefined = undefined;
  let callback = (a) => { return 100 + a };
//==========================

let anything: any = -20;
anything = 'Text';
anything = {};

//================================
let person:[string, number] = ['Max', 21];

let constant: string | number
let literal = 'enable' | 'disable'

//====================================
function showMessage(message: string):void {
 console.log(message);
}

function calc(num1: number, num2: number):number {
 return num1 + num2;
}

function customError():never {
 throw new Error('Error');
}



  return (
    <>

    </>
  )
}

export default App
