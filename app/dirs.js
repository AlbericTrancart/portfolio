const path = require('path');

module.exports = {
  src: __dirname,
  main: path.join(__dirname, 'index.jsx'),
  dist: path.join(__dirname, '../dist'),
  index: path.join(__dirname, '../dist/index.html'),
  img: path.join(__dirname, 'img'),
  favicon: path.join(__dirname, 'img/profile.jpg'),
};
