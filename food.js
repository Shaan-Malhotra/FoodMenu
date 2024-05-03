let menuItems = {
    drinks : [
        "Water", 
        "Tea",
        "Coke",
        "Sprite",
        "Lemonade",
        "Dr. P"
    ],
    entrees : [
        "Pizza", 
        "Burger",
        "Salad", 
        "Mac and Cheese"
    ],
    desserts : [
        "Cheesecake",
        "Apple Pie",
        "Chocolate Cake"
    ]
};

function populateSelect(selectId, items) {
    const selectElement = document.getElementById(selectId);
    
    items.forEach((item, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = item;
        selectElement.appendChild(option);
    });
}

window.onload = function() {
    populateSelect("dessertsSelect", menuItems.desserts);
    populateSelect("entreesSelect", menuItems.entrees);
    populateSelect("drinksSelect", menuItems.drinks);
};