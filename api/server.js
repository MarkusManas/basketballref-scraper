const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const api = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');


app.use(cors());
app.use(bodyParser.json());


api.route('/bbref/').post(function(req, res) {
    axios.get(req.body.link)
        .then( scraped => {
            console.log(scraped);
            const html = scraped.data;
            res.status(200).send(scraped)
            //const $ = cheerio.load(html);
            //const StatTables = $('.stats_table');
            //console.log(StatTables);
            //res.json({tables: StatTables})
        })
        .catch( err => {
            console.log(err)
        });
});

app.use('/api', api);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
