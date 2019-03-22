const express = require('express');
const router = express.Router();
const dbService = require('../dbService');

let myService;

router.use(async(req,res,next)=>{
  myService = new dbService();
  await myService.initDB("imagesAlbum");
  next();
});

router.get('/', async function(req, res, next) {
  const result = await myService.getAll('images');
  res.send(result);
});

router.post('/', async function(req, res, next) {
  const result = await myService.insertOne(req.body,'images');
  res.send(result);
});



module.exports = router;
