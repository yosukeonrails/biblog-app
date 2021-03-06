const path = require('path');

const config = {
    entry: './js/index.js',
    mode:'development',
    output: {   
      path: path.resolve(__dirname + 'build'),
      filename: 'bundle.js'
    },
    watch:true,
    module: {
      rules: [
        { test:/\.js$/, 
          use: [
              {
                loader:'babel-loader',
                options:{
                  presets:['babel-preset-env', 'react','es2015']
                    }
              }
              ]
        },
        {
            test:/\.less$/,
            use: [{
                loader:'style-loader'
            },{
                loader:'css-loader'
            },{
                loader:'less-loader',
                options:{
                    strictMath:true,
                    noIeCompat:true
                }
            }]
        }

       
      ]
    }
  };
  
  module.exports = config;

//   {
//     test:/\.css$/,
//     loader:'style-loader!css-loader'
//   }