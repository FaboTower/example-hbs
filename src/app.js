const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
//contenido static
app.use(express.static(path.join(__dirname, '..', 'public')));

app.engine('hbs', engine({
  extname: '.hbs', // File extension (can be '.hbs' or other)
  layoutsDir: path.join(__dirname, 'layouts'), // Directory for layout files
  partialsDir: path.join(__dirname, 'views', 'partials'), // Directory for partial files
  defaultLayout: 'main', // The default layout to use (e.g., main.handlebars)
}));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', {
        titulo: "Hola mundo",
        mensaje: "Express + Handlebars + Bootstrap"
    });
});

app.get('/about', (req, res) => {
    res.render('home', {
        titulo: "About",
        mensaje: "está página es el about"
    });
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
