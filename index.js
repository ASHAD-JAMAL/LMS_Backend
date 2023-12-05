const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const viewspath = path.join(__dirname, 'views')
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, resp) => {
    resp.render('index');
})
app.get('/index',(req,resp)=>{
    resp.render('index');
})
app.get('/book', (req, resp) => {
    resp.render('book');
});
app.get('/login',(req,resp)=>{
    resp.render('login');
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
