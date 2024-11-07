const express = require('express');
const app = express();

console.log('Starting server...');

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.static("sounds"));
app.use(express.static("images"));

app.set('view engine', 'html');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get("/", (request, response) => {
    console.log('Received request for /');
    response.render("index");
});