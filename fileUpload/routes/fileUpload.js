

const express = require(`express`)
const router = express.Router()

// import handler/controller
const { localFileUpload , imageUpload, videoUpload , imageSizeReducer, download, deletee } = require(`../controllers/fileUpload`)



// *api route
router.post(`/localFileUpload/:id` , localFileUpload) //this route simply upload the file at a path/location in server that developer will define
router.post(`/imageUpload` , imageUpload)
router.post(`/videoUpload` , videoUpload)
router.post(`/imageSizeReducer` , imageSizeReducer)
router.get(`/download` , download)
router.delete(`/delete` , deletee)

module.exports = router