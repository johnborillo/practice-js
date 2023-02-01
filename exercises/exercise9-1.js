function addApple() {
    const element = document.createElement('div');
    element.innerText = "Apple";
    const cartDiv = document.getElementById('cart');
    cartDiv.appendChild(element);
}

function addTomato() {
    const element = document.createElement('div');
    element.innerText = "Tomato";
    const cartDiv = document.getElementById('cart');
    cartDiv.appendChild(element);
}

function clearList() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
}