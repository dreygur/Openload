/* jshint esversion: 6 */

const Nightmare = require('nightmare');

const night = new Nightmare();
// const night = new Nightmare({waitTimeout: 60000});

let id = 'jTySySdmPhU';
let url = 'https://openload.co/f/' + id;

let myId;

async function getID() {
    return await night.goto(url)
                //.wait('#lqEH1')
                .evaluate(() => {
                    return document.getElementById('lqEH1').innerHTML;
                })
                .end()
                .then((data) => {
                    // console.log(data);
                    return data;
                })
                .catch(error => console.error('Search failed:', error));
}

const streamLink = async id => {
    let data = await getID();
    let stream = `https://openload.co/stream/${data}?mime=true`
    console.log(stream);
    //return data;
};

streamLink();