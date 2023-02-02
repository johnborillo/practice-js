function toInch() {
    const textbox = document.getElementById('value-title');
    let textboxValue = textbox.value;
    textboxValue /= 2.54;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    const element = document.createElement('div');
    element.innerText = textboxValue + "in";
    resultDiv.appendChild(element);
}

// function toCm() {
//     const textbox = document.getElementById('value-title');
//     let textboxValue = textbox.value;
//     textboxValue *= 2.54;
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = '';
//     const element = document.createElement('div');
//     element.innerText = textboxValue + "cm";
//     resultDiv.appendChild(element);
// }