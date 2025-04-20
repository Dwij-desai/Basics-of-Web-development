// Example of using .then() and .catch() with a Promise

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data.");
      }
    }, 1000);
  });
};

fetchData()
  .then((data) => {
    console.log(data); // Handle success
  })
  .catch((error) => {
    console.error(error); // Handle error
  });
