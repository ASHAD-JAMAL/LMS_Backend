const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const viewspath = path.join(__dirname, 'views')
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, resp) => {
    resp.render('index');
    //hello
})
app.get('/book', (req, resp) => {
    resp.render('book');
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});