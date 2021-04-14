
    const webpack = require('webpack');
    require('dotenv').config();

    module.exports = {
      webpack: config => {
        const env = Object.keys(process.env).reduce((acc, curr) => {
          acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
          return acc;
        }, {});
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
      },
      images: {
        domains: ["res.cloudinary.com"],
        // loader: 'cloudinary', // Cloudinaryを使う場合
        // path: 'cloudinary://374799731754153:2OtB2k3mhUmXQi4pqdO7JkZaYcc@dk2uwbtnl', // CloudinaryのURLベース
      },
      
    };