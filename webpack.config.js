module.exports = {
      mode: 'development',
      entry: __dirname + '/src',
      output: {
            path: '/',
            filename: 'bundle.js'
      },
      module: {
            rules: [
                  {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        options: { presets: ['es2015', 'react'] }
                  },
                  {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                  },

                  {
                        test: /\.scss$/,
                        use: [{
                            loader: "style-loader"
                        }, {
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader",
                            options: {
                                includePaths: ["node_modules/bourbon/core"]
                            }
                        }]
                    }
            ]
      }

}