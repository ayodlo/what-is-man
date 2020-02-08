// VARS
var buyButton = document.querySelector('.buy');
var checkoutScreen = document.querySelector('.checkout-screen');
var removeCheckoutScreen = document.querySelector('.remove-checkout-screen');

// EVENT LISTENERS
buyButton.addEventListener('click', ()=> {
    checkoutScreen.classList.toggle('display-checkout-screen');
})

removeCheckoutScreen.addEventListener('click', () => {
    checkoutScreen.classList.toggle('display-checkout-screen');
})