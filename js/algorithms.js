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

//BAGIAN 25.1
export function getStatistics(products) {
  const totalProducts = products.length;

  const prices = products.map(product => product.price);

  const averagePrice =
    prices.reduce((sum, price) => sum + price, 0) / prices.length;

  const highestPrice = Math.max(...prices);

  const lowestPrice = Math.min(...prices);

  const totalStock =
    products.reduce((sum, product) => sum + product.stock, 0);

  const ratings =
    products.map(product => product.rating ?? 0);

  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

  return {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating
  };
}


//BAGIAN 25.2
export function getCategoryAnalytics(products) {
  const analytics = new Map();

  for (const product of products) {

    if (!analytics.has(product.category)) {
      analytics.set(product.category, {
        count: 0,
        totalPrice: 0,
        totalRating: 0,
        totalStock: 0
      });
    }

    const category = analytics.get(product.category);

    category.count++;
    category.totalPrice += product.price;
    category.totalRating += product.rating ?? 0;
    category.totalStock += product.stock;
  }

  for (const category of analytics.values()) {
    category.averagePrice =
      category.totalPrice / category.count;

    category.averageRating =
      category.totalRating / category.count;

    delete category.totalPrice;
    delete category.totalRating;
  }

  return analytics;
}

//BAGIAN 25.3
export function exactSearch(products, keyword) {
  return products.filter(
    product => product.title === keyword
  );
}

export function partialSearch(products, keyword) {
  return products.filter(
    product => product.title.includes(keyword)
  );
}


export function caseInsensitiveSearch(products, keyword) {
  const lower = keyword.toLowerCase();

  return products.filter(
    product => product.title.toLowerCase().includes(lower)
  );
}

//BAGIAN 26
// find
export function findProduct(products, keyword) {
  return products.find(
    product => product.title.toLowerCase() === keyword.toLowerCase()
  );
}

// some
export function hasLowStock(products, limit = 10) {
  return products.some(
    product => product.stock < limit
  );
}

// every
export function allProductsHaveRating(products) {
  return products.every(
    product => product.rating !== undefined
  );
}

// Set
export function getUniqueCategories(products) {
  return new Set(
    products.map(product => product.category)
  );
}