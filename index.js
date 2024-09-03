const itemsList = document.querySelector('.items');
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');

addItemBtn.addEventListener('click', () => {
    const itemText = itemInput.value.trim();
    if (itemText) {
        const item = document.createElement('li');
        item.classList.add('item');
        item.textContent = itemText;
        itemsList.appendChild(item);
        itemInput.value = '';
    }
});

removeItemBtn.addEventListener('click', () => {
    const selectedItem = itemsList.querySelector('.item.selected');
    if (selectedItem) {
        selectedItem.remove();
    }
});

itemsList.addEventListener('click', (event) => {
    const clickedItem = event.target;
    if (clickedItem.classList.contains('item')) {
        if (clickedItem.classList.contains('selected')) {
            clickedItem.classList.remove('selected');
        } else {
            itemsList.querySelectorAll('.item.selected').forEach(item => item.classList.remove('selected'));
            clickedItem.classList.add('selected');
        }
    }
});