const path = require('path');

module.exports = {
  entry: {
	'HomePage' : './javascript/HomePage.js',
	'AboutUsPage' : './javascript/AboutUsPage.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};