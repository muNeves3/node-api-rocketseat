const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//inciando o app
const app =express();

//inciando o banco de dados
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true, useUnifiedTopology: true },
);
requireDir('./src/models');

const Product = mongoose.model("Product");


//primeira rota
app.get("/", (req, res) => {
  Product.create({title: 'React-Native', 
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });
  return res.send("Hello, Rocketseat");
});

app.listen(3001);

//mongod to run mongoDB