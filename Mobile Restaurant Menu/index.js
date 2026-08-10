import menuArray from "./data.js";

const containerUl = document.querySelector("#ordering .container ul");
const orders = document.querySelector(".orders");
const totalAmount = document.querySelector(".total-amount");
const completeOrderBtn = document.querySelector(".complete-order")

const ordersCount = {};


// -------------------------
// Render menu
// -------------------------

function renderMenuItem(food) {
    const li = document.createElement("li");

    const leftPart = document.createElement("div");
    leftPart.classList.add("left-part");

    const img = document.createElement("img");
    img.src = food.url;
    img.alt = food.name;

    const text = document.createElement("div");
    text.classList.add("text");

    const name = document.createElement("h2");
    name.classList.add("item-name");
    name.textContent = food.name;

    const ingredients = document.createElement("p");
    ingredients.classList.add("item-ingredients");
    ingredients.textContent = food.ingredients.join(", ");

    const price = document.createElement("h3");
    price.classList.add("item-price");
    price.textContent = `$${food.price}`;

    text.append(name, ingredients, price);
    leftPart.append(img, text);

    const rightPart = document.createElement("div");
    rightPart.classList.add("right-part");

    const button = document.createElement("button");
    button.classList.add("add-item");
    button.dataset.food = food.id;
    button.textContent = "+";

    rightPart.append(button);

    li.append(leftPart, rightPart);

    return li;
}


// Render all menu items

menuArray.forEach(food => {
    containerUl.append(renderMenuItem(food));
});


// -------------------------
// Add event listeners
// -------------------------

const buttons = document.querySelectorAll(".add-item");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const itemId = Number(button.dataset.food);

        ordersCount[itemId] = (ordersCount[itemId] || 0) + 1;

        const targetedItem = menuArray.find(item => item.id === itemId);

        if (ordersCount[itemId] === 1) {
            addOrderToCheckout(targetedItem);
        } else {
            updateExistingItemPrice(itemId);
        }

        totalAmount.textContent = `$${updateTotal()}`;
    });
});


// -------------------------
// Add item to checkout
// -------------------------

function addOrderToCheckout(food) {
    const li = document.createElement("li");
    li.id = `id-${food.id}`;
    li.classList.add("order-checkout");

    const left = document.createElement("div");
    left.classList.add("left");

    const name = document.createElement("h4");
    name.classList.add("order-name");
    name.textContent = food.name;

    const remove = document.createElement("span");
    remove.classList.add("remove");
    remove.textContent = "remove";

    const right = document.createElement("div");
    right.classList.add("right");
    right.dataset.price = food.price;
    right.textContent = `$${food.price}`;

    left.append(name, remove);
    li.append(left, right);

    orders.append(li);
}


// -------------------------
// Update existing item
// -------------------------

function updateExistingItemPrice(id) {
    const orderCheckout = document.getElementById(`id-${id}`);
    const priceElement = orderCheckout.querySelector(".right");

    const price = Number(priceElement.dataset.price);

    priceElement.textContent = `$${price * ordersCount[id]}`;
}


// -------------------------
// Calculate total
// -------------------------

function updateTotal() {
    return menuArray.reduce((total, food) => {
        return total + food.price * (ordersCount[food.id] || 0);
    }, 0);
}

// -------------------------
// Complete order
// -------------------------



completeOrderBtn.addEventListener('click', completeOrder);
let isCompleted = 1;
function completeOrder() {
    const total = updateTotal();
    
    if (total && isCompleted) {
        isCompleted = 0;

        const floatingCard = document.createElement("div");
        floatingCard.classList.add("floating-card");

        const floatingContainer = document.createElement("div");
        floatingContainer.classList.add("floating-container");

        const h3 = document.createElement("h3");
        h3.textContent = `Enter card details`;
        h3.classList.add("card-details-title");

        floatingContainer.append(h3);
        floatingCard.append(floatingContainer)

        const inputName = document.createElement("input");
        inputName.className = 'user-name'
        inputName.placeholder = 'Enter your name'
        inputName.value = ''

        const inputCardNumber = document.createElement("input");
        inputCardNumber.className = 'user-card-number'
        inputCardNumber.placeholder = 'Enter your card number'
        inputCardNumber.value = ''

        const inputCVV = document.createElement("input");
        inputCVV.className = 'user-cvv'
        inputCVV.placeholder = 'Enter your CVV'
        inputCVV.value = ''

        const payBtn = document.createElement("button");
        payBtn.className = 'pay'
        payBtn.textContent = "Pay";

        floatingContainer.append(inputName, inputCardNumber, inputCVV, payBtn);
        document.body.append(floatingCard)

        payBtn.addEventListener("click", () => {
            handlePayment(inputName.value, inputCardNumber.value, inputCVV.value, floatingCard);
        })
    }
}

function handlePayment(name, card_number, cvv, floatingCard) {
    if (name && card_number && cvv) {
        floatingCard.style.display = 'none'

        const successDiv = document.createElement("div");
        successDiv.className = "success";

        const thanksHeading = document.createElement("h2");
        thanksHeading.textContent = 'Thanks, James! Your order is on its way!'
        thanksHeading.className = 'thanks'

        successDiv.append(thanksHeading);

        const checkoutContainer = document.querySelector(".checkout .container");
        checkoutContainer.textContent = '';

        checkoutContainer.append(successDiv);
    }
}
