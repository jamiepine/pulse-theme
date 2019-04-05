const { writeFileSync } = require('fs');
const palette = require('./palette');
const colors = require('./colors');
const tokenColors = require('./tokenColors');

const content = {
  name: 'Pulse',
  author: 'Jamie Pine', // build script forked from Carmelo Pullara
  colors: colors(palette),
  tokenColors: tokenColors(palette),
};

writeFileSync('./themes/Pulse.json', JSON.stringify(content, null, 2));
