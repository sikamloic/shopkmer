const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/shopkmer'));

app.get('/*', (req, res) =>{
    res.sendFile('index.html', {root : 'dist/shopkmer/'})
});

app.listen(process.env.PORT || 8000);