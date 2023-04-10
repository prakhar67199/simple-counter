let data = document.querySelector('#final-value');

const increment = () =>
{
    // get the value from UI
    let value1= parseInt(data.innerText);
    // increment the value
    value1=value1+1;
     // set the value to UI
    data.innerText = value1; 
}
const decrement = () =>
{
    // get the value from UI
    let value1= parseInt(data.innerText);
    // decrement the value
    value1=value1-1;
    // set the value to UI
    data.innerText = value1; 
}