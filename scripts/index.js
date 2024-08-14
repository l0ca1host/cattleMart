let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePageB();
  displayItemsOnHomePageC();
  displayItemsOnHomePageG();
  displayItemsOnHomePageD();
  displayItemsOnHomePageCa();
  displayBagIcon();
}



function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}



function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}





function displayItemsOnHomePageB() 
{
  let itemsContainerElement = document.querySelector('.buffallo-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  if
  (buffallo.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <a href="tel:7406709015">
     <button class="btn-add-bag" onclick=" ">Place Order</button>
    </div></a>`
  }));
  itemsContainerElement.innerHTML = innerHtml;
}



function displayItemsOnHomePageC() {
  let itemsContainerElement = document.querySelector('.cow-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  if
  (cow.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <a href="tel:7406709015">
      <button class="btn-add-bag">Place Order</button>
    </div></a>`
  }));
  itemsContainerElement.innerHTML = innerHtml;
}

function displayItemsOnHomePageG() {
  let itemsContainerElement = document.querySelector('.goat-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  if
  (goat.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
            <a href="tel:7406709015">
      <button class="btn-add-bag">Place Order</button>
    </div></a>`
  }));
  itemsContainerElement.innerHTML = innerHtml;
}


function displayItemsOnHomePageD() {
  let itemsContainerElement = document.querySelector('.dog-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  if
  (dog.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
            <a href="tel:7406709015">
      <button class="btn-add-bag">Place Order</button>
    </div></a>`
  }));
  itemsContainerElement.innerHTML = innerHtml;
}

function displayItemsOnHomePageCa() {
  let itemsContainerElement = document.querySelector('.cat-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  if
  (cat.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
            <a href="tel:7406709015">
      <button class="btn-add-bag">Place Order</button>
    </div></a>`
  }));
  itemsContainerElement.innerHTML = innerHtml;
}





