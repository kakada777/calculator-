// function sum(){
//     let input1 = document.getElementById("input-1").value;
//     let input2 = document.getElementById("input-2").value;
//     let result = parseFloat(input1) + parseFloat(input2) ;

//     document.getElementById('result').innerHTML = result;
// }
// function minus(){
//     let input1 = document.getElementById("input-1").value;
//     let input2 = document.getElementById("input-2").value;
//     let result = parseFloat(input1) - parseFloat(input2) ;

//     document.getElementById('result').innerHTML = result;
// }
// function multiply(){
//     let input1 = document.getElementById("input-1").value;
//     let input2 = document.getElementById("input-2").value;
//     let result = parseFloat(input1) * parseFloat(input2) ;

//     document.getElementById('result').innerHTML = result;
// }
// function divide(){
//     let input1 = document.getElementById("input-1").value;
//     let input2 = document.getElementById("input-2").value;
//     let result = parseFloat(input1) / parseFloat(input2) ;

//     document.getElementById('result').innerHTML = result;
// }
function calculate(operation) {
    let input1 = parseFloat(document.getElementById("input-1").value);
    let input2 = parseFloat(document.getElementById("input-2").value);
    let result;

    switch (operation) {
        case 'add':
            result = input1 + input2;
            break;
        case 'subtract':
            result = input1 - input2;
            break;
        case 'multiply':
            result = input1 * input2;
            break;
        case 'divide':
            result = input1 / input2;
            break;
    }
    document.getElementById('result').innerHTML = result;
}