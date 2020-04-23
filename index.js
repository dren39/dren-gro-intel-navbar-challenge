document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // ------------------- Selector Variables --------------------

    const navbar = document.querySelector('[data-navbar="navbar"]');
    const productTab = document.querySelector('[data-products="products-tab"]');
    const industryTab = document.querySelector('[data-industries="industries-tab"]');
    const dropdown = document.querySelector('[data-dropdown="dropdown"]');
    const productDropdown = document.querySelector('[data-dropdown-products="dropdown-products"]')
    const industryDropdown = document.querySelector('[data-dropdown-industries="dropdown-industries"]')


    // --------------------- Functions ----------------------------

    function showProducts() {
        industryDropdown.classList.remove('industries-container');
        industryDropdown.classList.add('hide-industries')
        productDropdown.classList.remove('hide-products');
        productDropdown.classList.add('products-container');
        dropdown.classList.remove('hide-dropdown');
        dropdown.classList.add('dropdown-menu');
    }

    function showIndustries() {
    productDropdown.classList.remove('products-container');
    productDropdown.classList.add('hide-products');
    industryDropdown.classList.remove('hide-industries');
    industryDropdown.classList.add('industries-container')
    dropdown.classList.remove('hide-dropdown');
    dropdown.classList.add('dropdown-menu');
    }

    function hideDropdown() {
    productDropdown.classList.remove('products-container');
    productDropdown.classList.add('hide-products');
    industryDropdown.classList.remove('industries-container');
    industryDropdown.classList.add('hide-industries');
    dropdown.classList.remove('dropdown-menu');
    dropdown.classList.add('hide-dropdown');
    }
    // -------------------- Event Listener ------------------------

    navbar.addEventListener('mouseover', event => {
    if(event.target.dataset.products === "products-tab") {
        showProducts();
    } else if(event.target.dataset.industries === "industries-tab") {
        showIndustries();
    } else {
        hideDropdown();
    }
    })

});  