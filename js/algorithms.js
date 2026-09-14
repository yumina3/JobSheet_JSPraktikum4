// BAGIAN 8 SORTING
export function sortProducts(products, sortBy) {
  const sorted = [...products];

  if (sortBy === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  return sorted;
}

// BAGIAN 6 SEARCHING
export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(product);

    return groups;
  }, {});
}