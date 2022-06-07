const PORT = 8000

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

const articles = []

const url = `https://www.theguardian.com/us`

axios(url)
.then(response =>{
    const html = response.data
    const $ = cheerio.load(html)
    $(`.u-faux-block-link__overlay`, html).each(function(){
        const title = $(this).text()
        const url = $(this).find(`a`).attr(`href`)
        articles.push({
            title,
            url
        })

    })
    console.log(articles)
})


