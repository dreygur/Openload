/* jshint esversion: 6 */
/* Author: Eakibul Yeasin (github.com/rytotul) */

const { OpenloadScraper } = require('openload-scraper');

(async () => {
  const url = 'https://openload.co/f/jTySySdmPhU';
  const scrap = await new OpenloadScraper().scrap(url);
  if (scrap.success)
    console.log(scrap.data.sources);
})();


