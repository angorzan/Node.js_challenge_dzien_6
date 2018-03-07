const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use(express.static('./public/zadanie01/'));

app.post('/', (req, res) => {
    const {numberA, numberB} = req.body;
    (numberA % numberB === 0 )? (res.send(`${numberB} jest dzielnikiem ${numberA}`))
        : (res.send(`${numberB} nie jest dzielnikiem ${numberA}`));
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});