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


api.route('/bbref/:link').get(function(req, res) {
    axios.get(req.params.link)
        .then( scraped => {
            const html = scraped.data;
            const $ = cheerio.load(html);
            const StatTables = $('.stats_table');
            res.json({tables: StatTables})
        });
});

app.use('/api', api);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
