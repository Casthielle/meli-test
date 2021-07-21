import path from 'path';
import fs from 'fs';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  const indexFile = path.resolve('build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(data);
  });
});

module.exports = router;
