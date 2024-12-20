const BASE_URL = "https://dummyjson.com";
const wrapperEl = document.querySelector(".products__list");

const fetchProducts = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  response
    .json()
    .then((data) => {
      createCards(data);
    })
    .catch((error) => {
      console.error("Error:", error); 
    })
    .finally(() => {
      console.log("Request completed");
    });
};
window.onload = fetchProducts("/products?limit=8");

const createCards = (data) => {
  data.products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("products__item");
    card.innerHTML = `
        <div class="products__img">
                        <img src="${product.thumbnail}" alt="" data-id="${product.id}">
                    </div>
                    <div class="products__content">
                        <h3 class="products__heading">${product.title}</h3>
                        <p class="products__price">${product.price}$</p>
                    </div>
    `;
    wrapperEl.appendChild(card);
  });
};

wrapperEl.addEventListener("click", (e) => {
  if (e.target.closest(".products__img")) {
      open(`./pages/details.html?id=${e.target.dataset.id}`, "_self");
      console.log(e.target.dataset.id);
  }
});