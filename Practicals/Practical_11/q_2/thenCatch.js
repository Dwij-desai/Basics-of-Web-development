async function fetchDataAsyncAwait() {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();
    console.log("Users:", users.map((user) => ({ id: user.id, name: user.name })));

    const productsResponse = await fetch("https://dummyjson.com/products");
    const products = await productsResponse.json();
    console.log(
      "Products:",
      products.products.map((product) => ({ id: product.id, title: product.title }))
    );
  } catch (error) {
    console.error("Error fetching data with async-await:", error);
  }
}

function fetchDataThenCatch() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      console.log("Users:", users.map((user) => ({ id: user.id, name: user.name })));
      return fetch("https://dummyjson.com/products");
    })
    .then((response) => response.json())
    .then((products) => {
      console.log(
        "Products:",
        products.products.map((product) => ({ id: product.id, title: product.title }))
      );
    })
    .catch((error) => {
      console.error("Error fetching data with then-catch:", error);
    });
}

fetchDataAsyncAwait();
fetchDataThenCatch();
