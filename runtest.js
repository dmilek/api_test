console.log("Running test...");

// Example: Fetch data from an API
const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    console.log("API Response:", response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
