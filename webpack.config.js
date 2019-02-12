var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include:[/styles/ , /node_modules/]
      },
      {
        test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader']
    },
    {
      test: /\.mjs$/, // to support grapql .mjs and gql tags extenstion
      include: /node_modules/,
      type: 'javascript/auto'
    }
     
    ]
  },
  resolve: {
    extensions: ['*', '.mjs', '.js', '.jsx', '.json', '.gql', '.graphql']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      title: 'My App',
      template: './src/index.html', 
      filename: 'index.html' 
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true, // to support browser history api resolves page refresh issue
    port:9000
  }
};