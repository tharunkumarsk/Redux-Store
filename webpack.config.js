var path = require('path');

module.exports = {
devServer: {
	    contentBase: path.join(__dirname, './src'),
	    compress: true,
	    port: 8080
},
  entry: {
    main: './src/index.js'
},
output: {
    filename: 'index.js'
},
};