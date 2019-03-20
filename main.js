/*jshint esversion: 6 */

const express = require('express');
const app = express();

const Nightmare = require('nightmare');
const night = new Nightmare();

const port = process.env.PORT || 3000;

var router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Welcome User!' }));
router.route('/:id').get( (req, res) => {
  let url = 'https://openload.co/f/' + req.params.id;

  async function getID() {
    return await night
    .goto(url)
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
    res.json({Link: `${stream}`});
    //return data;
  };
  streamLink();
  //res.send(`ID: ${req.params.id}`);
});

app.use('/', router);

//app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App is listening on ${port}`));