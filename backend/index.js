const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const multer = require('multer')
var cors = require('cors');
const path = require('path');
const port = 5000

dotenv.config();
app.use(cors())
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Connected to MongoDB Successfully")).catch(err => console.log(err));

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, "images");
  }, filename:(req, file, cb)=>{
    cb(null, req.body.name);
  },
});
const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
  res.status(200).json("File has been uploaded")
})

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/posts', require('./routes/posts'))
app.use('/api/categories', require('./routes/categories'))

app.listen(port, () => {
  console.log(`TheBlogCafe-Backend listening at http://localhost:${port}`)
}) 