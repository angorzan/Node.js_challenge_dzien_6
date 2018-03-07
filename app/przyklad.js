const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/cookie/set', (req, res) => {
    res.cookie('test', 'Hello, World', {
        maxAge : 31536000000,
    }); //Ustawi ciastko "test" z zawartością "Hello, World" w przeglądarce użytkownika na rok
    res.send('Ciastko ustawione!');
});

app.get('/cookie/show', (req, res) => {
    const myCookie = req.cookies.test;
    res.send('Ciastko ma wartość: ' + myCookie); //Przeglądarka wyświetli "Ciastko ma wartość: Hello, World" - no chyba, że usunęliśmy ciastko :)
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});