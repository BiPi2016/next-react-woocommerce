const express = require('express');

const {wooCommerce} = require('../util/woocommerce');

exports.getAllProds = (req, res) => {
    wooCommerce.get('products')
    .then( results => {
      res.send(results.data);
    })
  };

exports.getProduct = (req, res) => {
  console.log('Let me fetch this product for you ' + req.params.id);
  wooCommerce.get(`products/${req.params.id}`)
  .then( result => {
    res.send(result.data);
  })
};
