let currentInput ='';
let currentOperation = '';
let previousInput = '';

function cleardisplay()
{
    currentInput ='';
    currentOperation ='';
    previousInput ='';
    document.getElementById('display').value = '';

}
function appendOperation(nithi)
{
    if(currentInput==='')
        return;
    if(previousInput!=='')
    {
        calulator();
    }
    currentOperation = appendOperation;
    previousInput = currentInput;
    currentInput='';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`; //previousInput + " " + currentOperation + " " + currentInput;
    
}
