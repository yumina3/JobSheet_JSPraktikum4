import { state } from "./state.js";
import { dummyProducts } from "./data.js";
import { renderProducts } from "./ui.js";
import { sortProducts } from "./algorithms.js";

const searchInput = document.querySelector("#search-input");
const categorySelect = document.querySelector("#category-select");
const sortSelect = document.querySelector("#sort-select");

//BAGIAN 18 STATE
function render() {
  let result = state.products;

  // Search
  if (state.search) {
    result = result.filter(product =>
      product.title
        .toLowerCase()
        .includes(state.search.toLowerCase())
    );
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

  renderProducts(result);
}

// BAGIAN 19 EVENT HANDLING
searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
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

// Data awal
state.products = dummyProducts;

render();

//BAGIAN 22
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