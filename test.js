/* jshint esversion: 6 */

const phantom = require('phantom');
const request = require('request');
const cheerio = require('cheerio');

let id = 'jTySySdmPhU';
let url = 'https://openload.co/f/' + id;

// let url = 'https://openload.co/f/jTySySdmPhU';

async function getUrl() {
  let options ={
    url: url,
    timeout: 10000
  }
  await request(options, (error, response, html) => {
    let $ = cheerio.load(html);
    let address;

    console.log('Entered...');
    console.log(html);
    console.log($('#lqEH1').text());
  });
}

loadJsSite = async (url) => {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    //console.info('Requesting', requestData.url);
  });

  const status = await page.open(url);
  const content = await page.property('content');
    //console.log(content);
  let $ = cheerio.load(content);
  console.log($('#lqEH1').text());

  await instance.exit();

  //return {$: cheerio.load(content), content: content};
} 

loadJsSite(url);