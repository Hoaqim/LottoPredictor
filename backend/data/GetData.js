const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const date = [15,16,17,18,10,20,21,22];
let content = [];

for(const i in date){   
    const website = `https://pewniaki.pl/wyniki/lotto/20${date[i]}/`;
    try {
        axios(website).then((response) => {
            const data = response.data;
            const $ = cheerio.load(data);
            
            $('.results-table-numbers', data).each(function() {
                const numbers = $(this).text();

                content.push({
                    numbers,
                });

                
            });
        });
    } catch(error){
        console.log(error, error.message);
    }
}
exports.content=content;
