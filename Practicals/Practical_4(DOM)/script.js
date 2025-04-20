// Function to create and display a product
function createProduct(obj) {
  let main = document.createElement("div");
  main.classList.add("product");
  main.style.width = "70%";
  main.style.display = "grid";
  main.style.margin = "auto";
  main.style.gridTemplateColumns = "repeat(2, 1fr)";
  main.style.padding = "20px";
  main.style.border = "1px solid #ccc";
  main.style.borderRadius = "10px";
  main.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

  // Image container
  let box1 = document.createElement("div");
  box1.classList.add("images");
  box1.style.display = "grid";
  box1.style.gridTemplateRows = "75% 25%";
  box1.style.gridTemplateColumns = "repeat(2, 1fr)";
  box1.style.gap = "10px";

  // Main image section
  let i1 = document.createElement("div");
  i1.style.backgroundColor = "#09122C";
  i1.style.display = "flex";
  i1.style.justifyContent = "center";
  i1.style.alignItems = "center";
  i1.style.gridColumn = "1 / span 2";

  let photo = document.createElement("img");
  photo.setAttribute("src", obj.thumbnail);
  photo.style.width = "180px"; // Increased size
  photo.style.height = "150px";
  photo.style.objectFit = "contain"; // Prevents stretching
  i1.append(photo);

  // Discount section
  let i2 = document.createElement("div");
  i2.style.backgroundColor = "#872341";
  i2.style.color = "white";
  i2.style.display = "flex";
  i2.style.alignItems = "center";
  i2.style.justifyContent = "center";
  i2.style.padding = "8px";
  let discountPercentage = document.createElement("p");
  discountPercentage.innerText = obj.discountPercentage + "% OFF";
  i2.append(discountPercentage);

  // Rating section
  let i3 = document.createElement("div");
  i3.style.backgroundColor = "#BE3144";
  i3.style.color = "white";
  i3.style.display = "flex";
  i3.style.alignItems = "center";
  i3.style.justifyContent = "center";
  i3.style.padding = "8px";
  let rating = document.createElement("p");
  rating.innerText = "Rating: " + obj.rating;
  i3.append(rating);

  // Ensure alignment of discount & rating
  i2.style.textAlign = "center";
  i3.style.textAlign = "center";

  box1.append(i1, i2, i3);

  // Details container
  let box2 = document.createElement("div");
  box2.classList.add("details");
  box2.style.display = "grid";
  box2.style.gridTemplateRows = "1fr 1fr 1fr";
  box2.style.gap = "10px";

  // Title and description
  let a1 = document.createElement("div");
  a1.style.backgroundColor = "#FBF5E5";
  a1.style.padding = "15px";
  let title = document.createElement("h2");
  title.innerText = obj.title;
  let description = document.createElement("p");
  description.innerText = obj.description;
  a1.append(title, description);

  // Price and category
  let a2 = document.createElement("div");
  a2.style.backgroundColor = "#A35C7A";
  a2.style.padding = "15px";
  a2.style.color = "white";
  let price = document.createElement("p");
  price.innerText = "Price: $" + obj.price;
  let category = document.createElement("p");
  category.innerText = "Category: " + obj.category;
  a2.append(price, category);

  // Buttons
  let a3 = document.createElement("div");
  a3.style.backgroundColor = "#212121";
  a3.style.display = "flex";
  a3.style.justifyContent = "space-evenly";
  a3.style.alignItems = "center";
  a3.style.padding = "10px";

  function createButton(text) {
    let button = document.createElement("button");
    button.textContent = text;
    button.style.padding = "10px";
    button.style.backgroundColor = "#FBF5E5";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    return button;
  }

  let b1 = createButton("Buy Now");
  let b2 = createButton("Add to Cart");
  let b3 = createButton("Wishlist");
  let b4 = createButton("Compare");

  a3.append(b1, b2, b3, b4);
  box2.append(a1, a2, a3);
  main.append(box1, box2);

  // Append product to the container
  document.getElementById("cont").append(main);
}

// Fetch and display products
async function fetchAndDisplayProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const products = data.products;

    // Clear existing content
    const container = document.getElementById("cont");
    container.innerHTML = "";

    // Display each product
    products.forEach((product) => {
      createProduct(product);
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Initialize
fetchAndDisplayProducts();
