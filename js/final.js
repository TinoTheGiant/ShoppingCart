//Array of Objects: Include at least five items for purchase. Include a product id, picture, a short name, a description, and a price for each item.

let products = [

    {
        id:1,
        picture:"assets/eng.jpg",
        sname:"England",
        description:"Official RWC home jersey of the Red Roses",
        price:10
    },

    {
        id:2,
        picture:'assets/sa.jpg',
        sname:"South Africa",
        description:"Official RWC home jersey of the Springboks",
        price:10
    },

    {
        id:3,
        picture:"assets/fra.jpg",
        sname:"France",
        description:"Official RWC home jersey of Les bleus",
        price:10
    },

    {
        id:4,
        picture:"assets/nzl.jpg",
        sname:"New Zealand",
        description:"Official RWC home jersey of the All Blacks",
        price:10
    },

    {
        id:5,
        picture:"assets/ire.jpg",
        sname:"Ireland",
        description:"Official RWC home jersey of the Wolfhounds",
        price:10
    },


    {
        id:6,
        picture:"assets/aus.jpg",
        sname:"Australia",
        description:"Official RWC home jersey of the Wallabies",
        price:10
    }
];

//display items

let container = document.getElementById('container');

products.forEach(product=>{
    let prodContainer = document.createElement('div');
    prodContainer.classList.add('product');

    let prodDescription = document.createElement('p');
    prodDescription.textContent = product.description;
    prodContainer.append(prodDescription);

    let prodName = document.createElement('p');
    prodName.textContent = `${product.sname} : $${product.price}`;
    prodContainer.append(prodName);

    let prodImage = document.createElement('img');
    prodImage.src = product.picture;
    prodImage.alt = product.description;
    prodContainer.append(prodImage);

    container.append(prodContainer);


    prodContainer.id = product.id; // Assign an ID for each product container
    container.append(prodContainer);
});

//setup shopping cart area 
let cartContainer = document.getElementById('cart-container');

let cart = []; // array to store selected items

function selectItem(id) {
    let selectedProduct = products.find(product => product.id === id);
    addToCart(selectedProduct);
}

function addToCart(product) {
    cart.push(product); 
    updateCart(); 
}

function removeFromCart(id) {
    let index = cart.findIndex(product => product.id === id);
    if (index !== -1) {
        cart.splice(index, 1); 
        updateCart(); 
    }
}

function updateCart() {
    cartContainer.innerHTML = ''; 

    let total = 0;
    cart.forEach(product => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        let prodName = document.createElement('p');
        prodName.textContent = `${product.sname} : $${product.price}`;
        cartItem.append(prodName);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(product.id));
        cartItem.append(removeButton);

        cartContainer.append(cartItem);

        total += product.price;
    });

    //Update total with shipping options
    let shippingSelect = document.getElementById('shipping-options');
    let shippingCost = parseInt(shippingSelect.value);
    total += shippingCost;

    // Display total
    let totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total Price: $${total}`;
}

// Add event listeners for prodContainer
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('product')) {
        selectItem(parseInt(event.target.id));
    }
});

//Setup shipping options dropdown
let shippingSelect = document.getElementById('shipping-options');
shippingSelect.addEventListener('change', updateCart);