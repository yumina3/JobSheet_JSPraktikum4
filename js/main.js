import { state } from "./state.js";
import { fetchProducts } from "./api.js";
import { renderProducts,
  renderStatistics,
  renderCategoryAnalytics
 } from "./ui.js";
import { sortProducts, 
  getStatistics,
  getCategoryAnalytics,
  exactSearch,
  partialSearch,
  caseInsensitiveSearch } from "./algorithms.js";

const searchInput = document.querySelector("#search-input");
const categorySelect = document.querySelector("#category-select");
const sortSelect = document.querySelector("#sort-select");
const searchModeSelect =
  document.querySelector("#search-mode-select");

//BAGIAN 18, 24, 25, 26
function render() {
  if (state.status === "loading") {
    document.querySelector("#product-list").innerHTML =
      "<p>Loading produk...</p>";
    return;
  }

  if (state.status === "error") {
    document.querySelector("#product-list").innerHTML =
      "<p>Gagal mengambil data produk.</p>";
    return;
  }

  //bagian 26
  if (state.status === "success" && state.products.length === 0) {
  document.querySelector("#product-list").innerHTML =
    "<p>Data produk tidak tersedia.</p>";
  return;
}

  let result = state.products;

  // 25.3
  if (state.search) {

  if (state.searchMode === "exact") {
    result = exactSearch(result, state.search);

  } else if (state.searchMode === "partial") {
    result = partialSearch(result, state.search);

  } else {
    result = caseInsensitiveSearch(result, state.search);
  }
}

  // Filter category
  if (state.category !== "all") {
    result = result.filter(
      product => product.category === state.category
    );
  }

  // Sorting
  if (state.sortBy !== "default") {
    result = sortProducts(result, state.sortBy);
  }

  //bagian 26 
  if (result.length === 0) {
  document.querySelector("#product-list").innerHTML =
    "<p>Produk tidak ditemukan.</p>";
  return;
}

  renderProducts(result);
  //25.1
const statistics = getStatistics(state.products);

renderStatistics(statistics);

//25.2
const categoryAnalytics =
  getCategoryAnalytics(state.products);

renderCategoryAnalytics(categoryAnalytics);
}



// BAGIAN 19 EVENT HANDLING
searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

//BAGIAN 25.3
searchModeSelect.addEventListener("change", (event) => {
  state.searchMode = event.target.value;
  render();
});

// Category
categorySelect.addEventListener("change", (event) => {
  state.category = event.target.value;
  render();
});

// Sorting
sortSelect.addEventListener("change", (event) => {
  state.sortBy = event.target.value;
  render();
});

// BAGIAN 23
async function loadProducts() {
  state.status = "loading"; //BAGIAN 24
  render();

  try {
    const products = await fetchProducts();

    state.products = products;
    state.status = "success";

  } catch (error) {
    state.status = "error";
    console.error(error);

  } finally {
    render();
  }
}

loadProducts();

/*BAGIAN 22
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data berhasil diambil");
  } else {
    reject("Terjadi error");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Selesai, apa pun hasilnya"));
  */