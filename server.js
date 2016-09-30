var express = require('express'),
    assert = require('assert'),
    multer = require('multer'),
    app = express(),
    upload = multer();

app.use(express.static("./public"));

app.post('/upload', upload.single('file'), function(req, res){
  res.json({
    "name":req.file.originalname,
    "size":req.file.size+" bytes"
  })
})

app.listen(process.env.PORT || 3000, function(){
  console.log("App listening on port 3000")
})
