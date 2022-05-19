const express = require('express')
const bannerData = require('./bannerData')
const logoData = require('./logoData')
const dealData = require('./dealData')
var cors = require('cors')
const productData = require('./productData')
const featureData = require('./featureCat')
const middleData = require('./middleBanner')


const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/logo', function (req, res) {    /* Video: 3 */
  res.send(logoData)
})

app.get('/banner', function (req, res) {    /* Video: 5 */
  res.send(bannerData)
})

app.get('/deal', function (req, res) {      /* Video: 6 */
  res.send(dealData)
})

app.get('/products', function (req,res) {  /* Video: 8 */
  res.send(productData)
})

app.get('/middle', function (req, res) {    /* Video: 3 */
  res.send(middleData)
})

app.get('/feature', function (req,res) {  /* Video: 12 */
  res.send(featureData)
})

app.listen(8000,()=>{
  console.log("server running on port 8000");
})