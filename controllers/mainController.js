const express = require('express');
const router = express.Router();
/* const axios = require('axios'); */
const fetch = require('node-fetch');

const controller = {
    index: async (req, res) => {
        const dataQuotes = await (await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')).json();
        const firstQuote = dataQuotes.quotes[0];
        console.log(firstQuote);
        return res.render('index', {firstQuote});
    }
}

module.exports = controller;