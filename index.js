const express = require("express")
const Clarifai = require("clarifai")
const multer = require("multer")
const pug = require("pug")
const bodyParser = require("body-parser");

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const upload = multer()
const resultsTemplate = pug.compileFile("public/results.pug")

const clarifai = new Clarifai.App({
  apiKey: "63391f13d6cd416fa4ae198c12e8e0a6"
})
app.get("/", (req, res) => {
  res.sendFile("public/index.html", {
    root: __dirname
  })
})

app.post("/upload", upload.single("photo"), (req, res) => {
  const base64String = Buffer.from(req.file.buffer).toString("base64")

  clarifai.models.predict("Trees", base64String).then(
   response => {
      res.send(resultsTemplate({
        concepts: response.outputs[0].data.concepts,
        image: base64String
      }))
    },
    err => {
      console.log(err)
    }
  )
})

app.post("/feedback", (req, res) => {
	
  clarifai.models.feedback(Clarifai.GENERAL_MODEL,  req.body.image, {
  id: 'f0ce328d16b94d1dacecaf9ee0d99901',
  data: {
    concepts: [
      {'id': 'evergreen', 'value': true },
    ]
  },
  info: {
    'eventType':  'annotation',
  }
})

})

app.use(express.static("public"))
app.listen(port, () => console.log(`Running on http://localhost:${port}/`))