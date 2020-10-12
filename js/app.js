document.addEventListener('DOMContentLoaded', () => {
    const newForm = document.querySelector("#form");
    newForm.addEventListener('submit', handleFormSubmit);

    const deleteButton = document.querySelector("#delete");
    deleteButton.addEventListener('click', handleDeleteButton);
});

const handleFormSubmit = function(event) {
    event.preventDefault();

    const menuItem = createMenuItem(event.target);
    const menu = document.querySelector('#meal-list');
    menu.appendChild(menuItem);

    event.target.reset();
};

const createMenuItem = function(form) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');

    const dish = document.createElement('h3');
    dish.textContent = form.dish.value;
    menuItem.appendChild(dish);

    const restaurant = document.createElement('h4');
    restaurant.textContent = form.restaurant.value;
    menuItem.appendChild(restaurant);

    const cuisine = document.createElement('p');
    cuisine.textContent = form.cuisine.value;
    menuItem.appendChild(cuisine);

    return menuItem;
};

const handleDeleteButton = function(event) {
    const menu = document.querySelector('#meal-list');
    menu.innerHTML = '';
};