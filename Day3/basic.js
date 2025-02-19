const http = require("http");

const server = http.createServer(async (req, res) => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Await the JSON conversion
        // console.log(data); // Logs full API response

        const productTitles = data.products.map((product) => product.title);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(productTitles));
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
});

server.listen(5000, (err) => {
    if (err) {
        console.log("Error:", err);
    }
    console.log("Server is running at http://localhost:5000");
});
