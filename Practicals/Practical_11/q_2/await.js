function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function getData() {
    try {
        console.log("Fetching data...");
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();
