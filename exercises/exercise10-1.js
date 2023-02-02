let cart = [];

function addBanana() {
    const quantityInput = document.getElementById('quantityTextbox');
    const quantityValue = quantityInput.value;
    const element = {
        name: 'Banana',
        quantity: quantityValue, 
        price: 3
    };
    cart.push(element);
    render();
}
function render() {
    document.getElementById('groceries').innerHTML = '';
    cart.forEach(function (fruit) {
        const groceriesDiv = document.getElementById('groceries');
        const element = document.createElement('div');
        element.innerText = fruit.name + " " + fruit.quantity;
        groceriesDiv.appendChild(element);
    });
}

let totalPrice = 0;
function findTotal(){
    for(let i = 0; i < cart.length; i++){
        totalPrice
    }
    console.log(quantity);
}

