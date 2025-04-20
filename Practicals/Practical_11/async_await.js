// Example of async-await in JavaScript

// Simulating a function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

// Async function to use await
async function getData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData(); // Wait for the promise to resolve
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
getData();