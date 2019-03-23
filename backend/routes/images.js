const express = require('express');
const router = express.Router();
const dbService = require('../dbService');
const fs = require('file-system');
const path = require("path");
const storagePath = path.join(__dirname, '../storage/');

let myService;

router.use(async (req, res, next) => {
  myService = new dbService();
  await myService.initDB("imagesAlbum");
  next();
});

router.get('/byHashtags', async function (req, res, next) {
  const hashtagsArr = req.query.hashtags.split("-");
  const allImages = await myService.getAll('images');
  const filteredList = allImages.filter(img => {
    return isArr1ContainsArr2(img.hashtags, hashtagsArr);
  });

  const result = filteredList.map(img => {
    const data = fs.readFileSync(img.path, 'utf8');
    return { photoBase64: data, hashtags: img.hashtags };
  });

  res.send(result);
});

router.get('/', async function (req, res, next) {
  const numOfImages = req.query.results ? parseInt(req.query.results) : 1;
  const imgList = await myService.getPartByLimit('images', numOfImages);
  const result = imgList.map(img => {
    const data = fs.readFileSync(img.path, 'utf8');
    return { photoBase64: data, hashtags: img.hashtags };
  });
  res.send(result);
});

router.post('/', async function (req, res, next) {
  const sampleFile = req.body.photoBase64;
  if (sampleFile) {
    const sampleFileName = Math.random().toString(32).split(".")[1] + '.txt';
    const path = storagePath + sampleFileName;
    fs.appendFile(path, sampleFile, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    let hashtags = isStringStartWithHashtag(req.body.hashtags) ? req.body.hashtags : "";
    let hashtagsArr = hashtags.split("#");
    //remove duplicate hashtags
    let hashtagsSet = new Set(hashtagsArr);
    hashtagsArr = Array.from(hashtagsSet);
    const newImg = { path, hashtags: hashtagsArr };
    const result = await myService.insertOne(newImg, 'images');
    res.send(result);
  }
  else{
    res.status(400).send('No file was uploaded');
  }
});

function isArr1ContainsArr2(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      return false;
    }
  }
  return true;
}

function isStringStartWithHashtag(hashtagString){
  if(hashtagString.charAt(0)==='#'){
    return true;
  }
  return false;
}

module.exports = router;
