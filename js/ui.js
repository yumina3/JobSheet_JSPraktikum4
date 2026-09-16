// BAGIAN 17 DOM
export function renderProducts(products) {
  const container = document.querySelector("#product-list");

  container.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;

    container.append(card);
  }
}

//BAGIAN 25
//25.1
export function renderStatistics(statistics) {

  const container = document.querySelector("#statistics");

  container.innerHTML = `
    <p>Total Products: ${statistics.totalProducts}</p>
    <p>Average Price: $${statistics.averagePrice.toFixed(2)}</p>
    <p>Highest Price: $${statistics.highestPrice.toFixed(2)}</p>
    <p>Lowest Price: $${statistics.lowestPrice.toFixed(2)}</p>
    <p>Total Stock: ${statistics.totalStock}</p>
    <p>Average Rating: ${statistics.averageRating.toFixed(2)}</p>
  `;
}

//25.2
export function renderCategoryAnalytics(analytics) {

  const container =
    document.querySelector("#category-analytics");

  container.innerHTML = "";

  for (const [category, data] of analytics) {

    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${category}</h3>
      <p>Jumlah Produk: ${data.count}</p>
      <p>Rata-rata Harga: $${data.averagePrice.toFixed(2)}</p>
      <p>Rata-rata Rating: ${data.averageRating.toFixed(2)}</p>
      <p>Total Stock: ${data.totalStock}</p>
    `;

    container.append(div);
  }
}