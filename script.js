const productsData = [
  {
    name: "Evenshroud",
    price: 20.99,
    image: "./imgs/s1.webp",
    category: "Soporte",
    description: "Los enemigos cercanos reciben más daño mágico.",
  },
  {
    name: "Echoes of Helia",
    price: 15.49,
    image: "./imgs/s2.webp",
    category: "Soporte",
    description:
      "Daña a los enemigos con poca salud para desencadenar una explosión maldita que inflige daño y ralentiza a los enemigos cercanos.",
  },
  {
    name: "Moonstone Renewer",
    price: 12.99,
    image: "./imgs/s3.webp",
    category: "Soporte",
    description:
      "Tus curaciones y escudos se enfrían más rápido y tienen mayor efecto en aliados con poca salud.",
  },
  {
    name: "Locket of the Iron Solari",
    price: 8.99,
    image: "./imgs/s4.webp",
    category: "Soporte",
    description: "Se activa para proteger del daño a los aliados cercanos.",
  },
  {
    name: "Shurelyas Battlesong",
    price: 25.99,
    image: "./imgs/s5.webp",
    category: "Soporte",
    description: "Actívala para acelerar a los aliados cercanos.",
  },
  {
    name: "Divine Sunderer",
    price: 18.49,
    image: "./imgs/t1.webp",
    category: "Tanque",
    description: "Gran golpe que daña al enemigo y cura al usuario.",
  },
  {
    name: "Goredrinker",
    price: 14.99,
    image: "./imgs/t2.webp",
    category: "Tanque",
    description: "Golpea en área curándote en base a los enemigos alcanzados.",
  },
  {
    name: "Stridebreaker",
    price: 11.49,
    image: "./imgs/t3.webp",
    category: "Tanque",
    description: "Lanza un latigazo que ralentiza a los objetivos alcanzados.",
  },
  {
    name: "JakSho The Protean",
    price: 19.99,
    image: "./imgs/t4.webp",
    category: "Tanque",
    description:
      "Acumula resistencias al mismo tiempo que drenas vida de tus enemigos al estar en combate.",
  },
  {
    name: "Iceborn Gauntlet",
    price: 7.99,
    image: "./imgs/t5.webp",
    category: "Tanque",
    description:
      "Resistencia mágica alta. Ralentiza pasivamente a los enemigos cercanos. Cuando se lanzan hechizos cerca de ti, libera una onda de energía que daña y ralentiza.",
  },
  {
    name: "Crown of the Shattered Queen",
    price: 22.99,
    image: "./imgs/m1.webp",
    category: "Mago",
    description:
      "Reduce todo el daño reducido por unos segundos tras ser atacado.",
  },
  {
    name: "Everfrost",
    price: 13.99,
    image: "./imgs/m2.webp",
    category: "Mago",
    description: "Actívalo para dejar quieto a tus enemigos.",
  },
  {
    name: "Hextech Rocketbelt",
    price: 9.49,
    image: "./imgs/m3.webp",
    category: "Mago",
    description:
      "Actívalo para correr hacia delante y desatar una explosión ardiente.",
  },
  {
    name: "Ludens Tempest",
    price: 16.99,
    image: "./imgs/m4.webp",
    category: "Mago",
    description: "Daño de ráfaga alto, bueno contra enemigos frágiles.",
  },
  {
    name: "Liandrys Anguish",
    price: 21.99,
    image: "./imgs/m5.webp",
    category: "Mago",
    description:
      "Carga en combate para infligir mucho daño a lo largo del tiempo, especialmente contra enemigos resistentes.",
  },
];

const cartItems = [];

// Función para renderizar los productos en la página según el filtro
function renderProductsByCategory(category) {
  const productsSection = document.querySelector(".products");
  productsSection.innerHTML = ""; // Limpiamos los productos existentes antes de agregar los nuevos

  let productID = 0;

  productsData.forEach((product) => {
    if (category === "all" || product.category === category) {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productElement.appendChild(productImage);

      const productName = document.createElement("h2");
      productName.textContent = product.name;
      productElement.appendChild(productName);

      const productCategory = document.createElement("p");
      productCategory.textContent = `Categoría: ${product.category}`;
      productElement.appendChild(productCategory);

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productElement.appendChild(productDescription);

      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.price.toFixed(2)}`;
      productElement.appendChild(productPrice);

      const addToCartButton = document.createElement("button");
      addToCartButton.setAttribute("id", productID);
      addToCartButton.classList.add("carrito-button");
      addToCartButton.textContent = "Agregar al carrito";
      addToCartButton.addEventListener(
        "click",
        function () {
          addToCart(productsData[this.id]);
        },
        false
      );
      productElement.appendChild(addToCartButton);
      productsSection.appendChild(productElement);
      productID++;
    }
  });
}

// Función para obtener el valor seleccionado del dropdown y actualizar los productos mostrados
function handleFilterChange() {
  const filterDropdown = document.getElementById("category-filter");
  const selectedCategory = filterDropdown.value;
  renderProductsByCategory(selectedCategory);
}

// Función para agregar un producto al carrito
function addToCart(product) {
  cartItems.push({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  // Actualizar el contador del carrito
  const cartItemCount = document.querySelector(".cart-item-count");
  cartItemCount.textContent = cartItems.length;

  // Mostrar los elementos del carrito
  renderCartItems();
}

// Función para renderizar los elementos del carrito
function renderCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items-container");
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    const cartItemImage = document.createElement("img");
    cartItemImage.src = item.image;
    cartItemImage.alt = item.name;
    cartItemElement.appendChild(cartItemImage);

    const cartItemInfo = document.createElement("div");
    cartItemInfo.classList.add("cart-item-info");

    const cartItemName = document.createElement("span");
    cartItemName.textContent = item.name;
    cartItemInfo.appendChild(cartItemName);

    const cartItemPrice = document.createElement("span");
    cartItemPrice.textContent = `$${item.price.toFixed(2)}`;
    cartItemInfo.appendChild(cartItemPrice);

    cartItemElement.appendChild(cartItemInfo);

    // Botón para eliminar el producto del carrito
    const btnRemove = document.createElement("button");
    btnRemove.classList.add("btn-remove");
    btnRemove.textContent = "Eliminar";
    btnRemove.addEventListener("click", () => {
      removeFromCart(index);
    });
    cartItemElement.appendChild(btnRemove);

    cartItemsContainer.appendChild(cartItemElement);
  });
}

function updateCartItemCount() {
  const cartItemCount = document.querySelector(".cart-item-count");
  cartItemCount.textContent = cartItems.length;
}

function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  renderCartItems();
  updateCartItemCount();
}

// Función para mostrar u ocultar el contenido del carrito
function toggleCart() {
  const cartItemsContainer = document.querySelector(".cart-items-container");
  cartItemsContainer.classList.toggle("show");
}

// Llamada inicial para mostrar todos los productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderProductsByCategory("all");
  // Agregamos el evento para escuchar el cambio en el filtro
  const filterDropdown = document.getElementById("category-filter");
  filterDropdown.addEventListener("change", handleFilterChange);

  // Agregamos el evento para escuchar el click en el botón "Agregar al carrito"
  const addToCartButtons = document.querySelectorAll(".product button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = productsData.find(
        (item) =>
          item.name === button.parentNode.querySelector("h2").textContent
      );
      addToCart(product);
      updateCartItemCount(); // Actualizar el contador de objetos en el carrito
    });
  });

  // Agregamos el evento para escuchar el click en el icono del carrito
  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.addEventListener("click", toggleCart);
});

// Llamada a la función para renderizar los productos cuando se cargue la página
document.addEventListener("DOMContentLoaded", () => {
  renderProductsByCategory("all");
});
