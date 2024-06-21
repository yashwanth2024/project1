// script.js
document.addEventListener('DOMContentLoaded', () => {
    const currencySelector = document.getElementById('currency');
    const pricingToggles = document.querySelectorAll('.toggle-btn');
    const plans = document.querySelectorAll('.plan');
    let currentCurrency = '$';

    // Function to update the currency symbol
    function updateCurrencySymbol(symbol) {
        plans.forEach(plan => {
            const priceElement = plan.querySelector('.price');
            const price = priceElement.textContent.replace(currentCurrency, '');
            priceElement.textContent = symbol + price;
        });
        currentCurrency = symbol;
    }

    // Add event listener for currency change
    currencySelector.addEventListener('change', (e) => {
        updateCurrencySymbol(e.target.value);
    });

    // Function to display the selected plan
    function displayPlan(planId) {
        plans.forEach(plan => {
            plan.style.display = 'none';
        });
        document.getElementById(planId).style.display = 'block';
    }

    // Add event listeners to the pricing toggles
    pricingToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            displayPlan(e.target.getAttribute('data-plan'));
        });
    });

    // Initialize by displaying the basic plan
    displayPlan('basic');
});