const patch = require('patch')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCss = new ExtractTextPlugin({
    filename: 'style.css'
})

module.exports =  {
   entry: './src/js/bootstrap.js',
   output: {
       path: patch.resolve(__dirname, 'dist'),
       filname: 'bundle.js'
   },
   
   mode:'production',
   module: {
       rules: [
           //Regla de CSS
           {test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                { //css-loader
                    loader:'css-loader',
                    option: {
                        module:true
                    }
                }
            ]}, // fin de la regla CSS
             // Regla de SASS
            
            {test: '/\.scss$/',
            use: extractCss.extract({
                 use: [{loader:'css-loader'}] 
            })
            //loader: ['style-loader', 'sass-scss']
          }
            
        ]
   }


}

