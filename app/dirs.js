const path = require('path');

module.exports = {
  src: __dirname,
  ejs: path.join(__dirname, 'index.ejs'),
  main: path.join(__dirname, 'index.jsx'),
  dist: path.join(__dirname, '../dist'),
  index: path.join(__dirname, '../dist/index.ejs'),
  img: path.join(__dirname, 'img'),
  favicon: path.join(__dirname, 'img/profile.jpg'),
};
