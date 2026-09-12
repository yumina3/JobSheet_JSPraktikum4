// BAGIAN 1

import { count } from "node:console";

// 1.1
function calculateDiscountedPrice(price, discountPercent){
return price - (price * discountPercent) / 100;
}

// bagian 1.2
const cart = [
{ title: "Laptop", price: 1000, discountPercent: 10 },
{ title: "Mouse", price: 20, discountPercent: 5 },
{ title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cart) {
    const result = [];
    for (const item of cart){
        const harga_akhir = item.price - (item.price * item.discountPercent) / 100;
        result.push({
            title: item.title,
            originalPrice: item.price,
            discountPercent: item.discountPercent,
            harga_akhir: harga_akhir});
    }
    return result;
}
console.log(applyDiscounts(cart));


// BAGIAN 2
// 2.1 
const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Wireless Mouse", price: 25, category: "accessories", stock: 40 },
  { id: 5, title: "Mechanical Keyboard", price: 75, category: "accessories", stock: 20 },
  { id: 6, title: "27-inch Monitor", price: 300, category: "monitors", stock: 8 },
  { id: 7, title: "USB-C Hub", price: 35, category: "accessories", stock: 25 },
  { id: 8, title: "Tablet", price: 450, category: "tablets", stock: 10 },
  { id: 9, title: "Smartwatch", price: 220, category: "wearables", stock: 12 },
  { id: 10, title: "Bluetooth Speaker", price: 60, category: "audio", stock: 18 },
  { id: 11, title: "External SSD 1TB", price: 110, category: "storage", stock: 22 },
  { id: 12, title: "Webcam HD", price: 45, category: "accessories", stock: 30 },
  { id: 13, title: "Gaming Chair", price: 250, category: "furniture", stock: 6 },
  { id: 14, title: "Laptop Stand", price: 30, category: "accessories", stock: 35 },
  { id: 15, title: "Wireless Earbuds", price: 90, category: "audio", stock: 28 },
  { id: 16, title: "Power Bank 20000mAh", price: 40, category: "accessories", stock: 33 },
  { id: 17, title: "4K Action Camera", price: 180, category: "cameras", stock: 9 },
  { id: 18, title: "Router Wi-Fi 6", price: 130, category: "networking", stock: 14 },
  { id: 19, title: "Graphics Tablet", price: 150, category: "accessories", stock: 7 },
  { id: 20, title: "Portable Projector", price: 320, category: "electronics", stock: 4 },
  { id: 21, title: "Smart Home Hub", price: 95, category: "smart-home", stock: 16 },
  { id: 22, title: "Fitness Tracker", price: 55, category: "wearables", stock: 24 },
  { id: 23, title: "Noise Cancelling Headset", price: 200, category: "audio", stock: 11 },
  { id: 24, title: "Docking Station", price: 85, category: "accessories", stock: 19 },
  { id: 25, title: "Mini PC", price: 400, category: "computers", stock: 5 },
  { id: 26, title: "Wireless Charger Pad", price: 20, category: "accessories", stock: 45 },
  { id: 27, title: "Smart LED Bulb", price: 15, category: "smart-home", stock: 50 },
  { id: 28, title: "Digital Drawing Pen", price: 65, category: "accessories", stock: 17 },
  { id: 29, title: "Portable SSD Case", price: 12, category: "storage", stock: 60 },
  { id: 30, title: "Curved Gaming Monitor", price: 480, category: "monitors", stock: 6 }
];

function findProductById(products, id){
    return products.find (item => item.id === id);
}

console.log(findProductById(products, 7));
console.log(findProductById(products, 171));

//2.2
function stockMenipis(products, stock){
    return products.filter(item => item.stock < 10);
}
console.log (stockMenipis(products))

//2.3
function updateStock(products, id, newStock){
    return products.map(item => item.id === id ? { ...item, stock: newStock} : item);
}

const updatedProducts = updateStock(products, 4, 15);
console.log(updatedProducts)
console.log(products);

// BAGIAN 3 - NESTED DATA
const productsNested = [
{
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
        { user: "A", rating: 5, comment: "Good product" },
        { user: "B", rating: 4, comment: "Worth it" }
    ]
},
{
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
        { user: "C", rating: 4, comment: "Nice camera" },
        { user: "D", rating: 5, comment: "Fast" },
        { user: "E", rating: 3, comment: "Battery so-so" }
    ]
}
];

// 3.1 
function getAllTags(products){
    return products.map(p => p.tags);
}
console.log(getAllTags(productsNested))

//3.2
function findProductsByTag(products, tag){
    return products.filter (p =>p.tags.includes(tag));
}
console.log(findProductsByTag(productsNested, "mobile"));

//3.3
function jumlahReviewProducts(products){
    return products.map(p=> ({
        id: p.id,
        title: p.title,
        totalReviews: p.reviews.length
    }));
}
console.log(jumlahReviewProducts(productsNested));

//3.4 
function RatingReviewFiveStars(products){
    const result = [];
  for (const p of products) {
    for (const r of p.reviews) {
      if (r.rating === 5) result.push(r);
    }
  }
  return result;
}
console.log(RatingReviewFiveStars(productsNested));

//3.5 
function getAverageRatingFromReviews(products) {
  return products.map(p => {
    const total = p.reviews.reduce((sum, r) => sum + r.rating, 0);
    return {
      id: p.id,
      title: p.title,
      averageRating: total / p.reviews.length
    };
  });
}
console.log(getAverageRatingFromReviews(productsNested));

//3.6 
function getMostReviewedProduct(products) {
  return products.reduce((max, p) =>
    p.reviews.length > max.reviews.length ? p : max
  );
}
console.log(getMostReviewedProduct(productsNested));

//3.7 
function getAllReviewRatings(products) {
  const result = [];
  for (const p of products) {
    for (const r of p.reviews) {
      result.push(r.rating);
    }
  }
  return result;
}
console.log(getAllReviewRatings(productsNested));

// BAGIAN 4
// 4.1
function getAllTagsFlat(products) {
  return products.flatMap(p => p.tags);
}

//4.2
function getAllComments(products) {
  return products.flatMap(p => p.reviews.map(r => r.comment));
}

console.log(getAllTagsFlat(productsNested));
console.log(getAllComments(productsNested));

// BAGIAN 5
// 5.1 
const MeanAllProducts = products
  .filter(p=>p.category === "laptops")
  .map(p => p.price);

const avg = MeanAllProducts.reduce((a,b)=> a+b, 0) / MeanAllProducts.length;

// 5.2 
function getStatistics(products) {
  const totalProducts = products.length;
  const prices = products.map(p=> p.price);
  const averagePrice = prices.reduce((a,b)=> a+b,0)/ prices.length;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const ratings = products.map(p => p.rating);
  const averageRating = ratings.reduce((a,b) => a + b, 0) / ratings.length;

  return {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating
  };
}

// BAGIAN 6
// 6.1 
function linearSearch(array, target) {
   for (let i = 0; i < array.length; i++) { 
    if (array[i] === target) return i; 
  } 
  return -1;
}

//6.2 
function findProductByIdLinear (products, id){
  for (let i = 0; i < products.length; i++){
    if (products[i].id === id) return products[i];
  }
  return -1;
}

// BAGIAN 7
// 7.1 
function binarySearch(arr, target) { 
  let left = 0; 
  let right = arr.length - 1; 
  while (left <= right) { 
    const mid = Math.floor((left + right) / 2); 
    if (arr[mid] === target) return mid; 
    if (arr[mid] < target) left = mid + 1; 
    else right = mid - 1; 
  } 
  return -1;
}

//7.2
const sortedProducts = [...products].sort((a,b) => a.price - b.price);
function binarySearchByPrice(sortedProducts,targetPrice){
  let left =0; 
  let right = sortedProducts.length - 1;
  while (left <= right){
    const mid = Math.floor((left + right) / 2);
    if (sortedProducts[mid].price === targetPrice) return sortedProducts[mid];
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// BAGIAN 8
//8.1
function bubbleSort(numbers) { 
  const arr = [...numbers]; 
  for (let i = 0; i < arr.length - 1; i++) { 
    for (let j = 0; j < arr.length - 1 - i; j++) { 
      if (arr[j] > arr[j + 1]) { 
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
      } 
    } 
  } 
  return arr;
}

//8.2
function sortProducts(products, sortBy){
  const sorted = [...products];
  if (sortBy === "price-asc"){
    sorted.sort((a,b) => a.price - b.price);
  } else if (sortBy === "price-desc"){
    sorted.sort((a,b)=> b.price - a.price);
  } else if (sortBy === "rating"){
    sorted.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "title"){
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  }
  return sorted;
}

console.log("5.1 - Rata-rata harga laptop:");
console.log(avg);

console.log("5.2 - Statistics:");
console.log(getStatistics(products));

console.log("6.1 - Linear Search:");
console.log(linearSearch([1, 2, 3, 4, 5], 3));

console.log("6.2 - Find Product by ID:");
console.log(findProductByIdLinear(products, 2));

console.log("7.1 - Binary Search:");
console.log(binarySearch([1, 2, 3, 4, 5], 4));

console.log("7.2 - Binary Search by Price:");
console.log(binarySearchByPrice(sortedProducts, 250));

console.log("8.1 - Bubble Sort:");
console.log(bubbleSort([5, 3, 8, 1]));

console.log("8.2 - Sort Products:");
console.log(sortProducts(products, "price-asc"));
console.log(sortProducts(products, "price-desc"));
console.log(sortProducts(products, "rating"));
console.log(sortProducts(products, "title"));

// BAGIAN 9
// 9.1
function groupByCategory(products) { 
  return products.reduce((groups, product) => { 
    const key = product.category; 
    if (!groups[key]) groups[key] = []; 
    groups[key].push(product); 
    return groups; 
  }, {});
}

// 9.2
function summaryPerCategory (products){
  const grouped = groupByCategory(products);
  const summary = Object.keys(grouped).map(category=> ({
    category: category,
    jumlah: grouped[category].length
  }));
  return summary;
}
console.table(summaryPerCategory(products));

// BAGIAN 10
// 10.1
function countFrequency(array) {
  return array.reduce((counts, item) => { 
    counts[item] = (counts[item] || 0) + 1; 
    return counts; 
  }, {});
}

// 10.2
const categoryFrequency = countFrequency(products.map(p => p.category));
console.log("Frequency by category:", categoryFrequency);

const allTags = products.flatMap(p => p.tags || []);
const tagsFrequency = countFrequency(allTags);
console.log("Frequency by tags:", tagsFrequency);

const roundedRatings = products.map(p => Math.round(p.rating));
const ratingFrequency = countFrequency(roundedRatings);
console.log("Frequency by rating (rounded):", ratingFrequency);

const brands = products
  .filter(p => p.brand) 
  .map(p => p.brand);
const brandFrequency = countFrequency(brands);
console.log("Frequency by brand:", brandFrequency);

// BAGIAN 11
// 11.1
const uniqueCategories = [...new Set(products.map(p => p.category))];
console.log("Unique categories:", uniqueCategories);

const uniqueBrands = [... new Set(
  products.filter(p=> p.brand).map(p=>p.brand)
)];
console.log("Unique brands:", uniqueBrands);

const uniqueTags = [... new Set(products.flatMap(p => p.tags || []))];
console.log("Unique tags:", uniqueTags);

// BAGIAN 12
// 12.1
function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

const productLookup = buildProductLookup(products);
console.log(productLookup.get(10));

//BAGIAN 13
// 13.1
class Stack { 
  constructor() { 
    this.items = []; 
  } 
  push(item) { 
    this.items.push(item); 
  } 
  pop() { 
    return this.items.pop(); 
  } 
  peek() { 
    return this.items[this.items.length - 1]; 
  } 
  isEmpty() { 
    return this.items.length === 0; 
  }
}

//13.2
class ProductSearchHistory {
  constructor() {
    this.historyStack = new Stack();
    this.currentKeyword = null;
  }

  search(keyword) {
    if (this.currentKeyword !== null) {
      this.historyStack.push(this.currentKeyword);
    }
    this.currentKeyword = keyword;
    console.log(`Searching for: "${keyword}"`);
    return keyword;
  }

  undoSearch() {
    if (this.historyStack.isEmpty()) {
      console.log("Tidak ada riwayat pencarian sebelumnya.");
      return this.currentKeyword;
    }
    this.currentKeyword = this.historyStack.pop();
    console.log(`Undo ke keyword: "${this.currentKeyword}"`);
    return this.currentKeyword;
  }
}

//cara pake yach
const productExplorer = new ProductSearchHistory();
productExplorer.search("laptop");
productExplorer.search("phone");
productExplorer.search("tablet");

productExplorer.undoSearch(); 
productExplorer.undoSearch(); 
productExplorer.undoSearch();

