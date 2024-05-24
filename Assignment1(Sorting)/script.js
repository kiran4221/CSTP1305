const products = [
    {
      "id": 1,
      "name": "Apple",
      "category": "Fruits",
      "price": 0.5,
      "inStock": true,
      "description": "A crisp, sweet red apple.",
      "nutrition": {
        "calories": 52,
        "fat": 0.2,
        "carbohydrates": 14,
        "protein": 0.3
      }
    },
    {
      "id": 2,
      "name": "Banana",
      "category": "Fruits",
      "price": 0.3,
      "inStock": true,
      "description": "A ripe, yellow banana.",
      "nutrition": {
        "calories": 89,
        "fat": 0.3,
        "carbohydrates": 23,
        "protein": 1.1
      }
    },
    {
      "id": 3,
      "name": "Carrot",
      "category": "Vegetables",
      "price": 0.2,
      "inStock": true,
      "description": "A fresh, crunchy carrot.",
      "nutrition": {
        "calories": 41,
        "fat": 0.2,
        "carbohydrates": 10,
        "protein": 0.9
      }
    },
    {
      "id": 4,
      "name": "Bread",
      "category": "Bakery",
      "price": 2.5,
      "inStock": true,
      "description": "A loaf of freshly baked bread.",
      "nutrition": {
        "calories": 265,
        "fat": 3.2,
        "carbohydrates": 49,
        "protein": 9
      }
    }
]

function populateMyTable() {
    const tableBody = document.getElementById('productsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(priceCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = product.description;
        row.appendChild(descriptionCell);

        tableBody.appendChild(row);
    });
}
  
function sortTableByName() {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < products.length - 1; i++) {
            if (products[i].name.localeCompare(products[i + 1].name) > 0) {
                const temp = products[i];
                products[i] = products[i + 1];
                products[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    populateMyTable();
}


populateMyTable();

window.sortTableByName = sortTableByName;