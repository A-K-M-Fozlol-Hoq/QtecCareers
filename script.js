const addCartPrice = (price) => {
    if(isNaN(parseInt(document.getElementById('total').innerText))){
      document.getElementById("subtotal").innerText = price 
      document.getElementById("total").innerText = price 
      document.getElementById("total-amount").innerText = price 
    }
    else{
      document.getElementById("subtotal").innerText = parseInt(document.getElementById("subtotal").innerText) + parseInt(price);
      document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + parseInt(price);
      document.getElementById("total-amount").innerText =parseInt(document.getElementById("total-amount").innerText) + parseInt(price);
    }
  };
  const reduceCartPrice = (price) => {
    document.getElementById("subtotal").innerText = parseInt(document.getElementById("subtotal").innerText) - price  ;
    document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - price;
    document.getElementById("total-amount").innerText = parseInt(document.getElementById("total-amount").innerText) - price;
  };

  const productsTag = document.getElementById("products");
  fakeProductsData.map((product) => {
    const haveToAddProducts = document.createElement("div");
    haveToAddProducts.classList.add("single-product");
    const img = document.createElement("img");
    img.src = `${product.picture}`;
    img.setAttribute(
      `onclick`,
      `handleAddToCart('${product.price}', '${product.name}', '${product.picture}', '${product.index}')`
    );
    const productName = document.createElement("p");
    var name = product.name.substring(0, 9);
    productName.innerHTML = `${name} ...`;
    haveToAddProducts.appendChild(img);
    haveToAddProducts.appendChild(productName);
    productsTag.appendChild(haveToAddProducts);
  });

  const handleAddToCart = (price, name, picture, index) => {
    addCartPrice(price)
    const haveToAddProducts = document.createElement("div");
    haveToAddProducts.classList.add("single-cart-product");
    const productImage = document.createElement("img");
    productImage.classList.add("single-cart-product-image");
    productImage.src = `${picture}`;
    const productQuantity = document.createElement("p");
    productQuantity.classList.add("single-cart-product-quantity");
    productQuantity.innerHTML = `<p class='quantity'>${1}</p>`;
    const productName = document.createElement("p");
    productName.classList.add("single-cart-product-name");
    productName.innerHTML = `${name}`;
    const productPrice = document.createElement("p");
    productPrice.classList.add("single-cart-product-price");
    productPrice.innerHTML = `BDT: ${price}`;
    const deleteImage = document.createElement("img");
    deleteImage.classList.add("single-cart-delete-image");
    deleteImage.src = `https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png`;
    const id = "_" + Math.random().toString(36).substr(2, 9);
    haveToAddProducts.id = id;
    deleteImage.setAttribute(
      `onclick`,
      `handleRemoveFromCart('${price}','${id}')`
    );
    haveToAddProducts.appendChild(productImage);
    haveToAddProducts.appendChild(productQuantity);
    haveToAddProducts.appendChild(productName);
    haveToAddProducts.appendChild(productPrice);
    haveToAddProducts.appendChild(deleteImage);
    document.getElementById("cart-products").appendChild(haveToAddProducts);
  };
  const handleRemoveFromCart = (price, id) => {
    var addedProducts = document.getElementsByClassName(
      "single-cart-product"
    );
    let i;
    for (i = 0; i < addedProducts.length; i++) {
      if (addedProducts[i].id == id) {
        addedProducts[i].style.display = "none";
        reduceCartPrice(price)
      }
    }
  };