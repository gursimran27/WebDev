// import model
const { log } = require("console");
const File = require(`../models/file`);
const fs = require("fs");

// import cloudinary
const cloudinary = require(`cloudinary`).v2;

// *localFileUpload ->handler funtion
// ?this func will upload the file somewhere in server(local) location/path defined by developer
exports.localFileUpload = async (req, res) => {
  try {
    // req.files is obj that contain info of the uploaded file

    // step 1->fetch the file
    // const file = req.files.file
    // or
    const { file } = req.files;
    console.log("file->", file);

    const { id } = req.params;

    // step 2-> enter the path
    // after seeing this object we decide to fetch the extension of file from its name by using ${file?.name.split(`.`)[1]}`
    // __dirname -> gives current working directory as here it is desktop/wevDev/fileUpload/controller
    // Date.now() always give a unique value in milliseconds i.e name of file
    // ${file?.name.split(`.`)[1]}` mean extension of file
    // the below path represent the path to store the file in server
    let path =
      __dirname +
      "/files/" +
      `${id}/` +
      Date.now() +
      `.${file?.name.split(`.`)[1]}`;
    console.log(`path->${path}`);
    let filename = Date.now() + `.${file?.name.split(`.`)[1]}`;
    // !or
    // *Construct the path to store the file on the server
    // const filename = Date.now() + `.${file?.name.split('.').pop()}`;
    // const filePath = path.join(__dirname, 'files', filename);

    if (!fs.existsSync(__dirname + "/files/" + `${id}`)) {
      fs.mkdirSync(__dirname + "/files/" + `${id}`, { recursive: true });
      console.log(`Directory created:`);
    } else {
      console.log(`Directory already exists`);
    }

    // step 3->move the file to that path on server
    file.mv(path, (err) => {
      console.log(err);
    });

    const fileUrl = `http://localhost:8000/uploads/${id}/${filename}`;

    // step 4-> send response
    res.status(200).json({
      success: true,
      message: `local file uploaded successfully`,
      path: path,
      url: fileUrl,
    });
  } catch (error) {
    console.log(`unable to upload`);
    console.log(error);
  }
};

// * for download
exports.download = async (req, res) => {
  try {
    let path = __dirname + "/files/" + "09/" + 1721722557524 + `.mp4`;
    res.download(path);
  } catch (error) {
    console.log(error);
  }
};

exports.deletee = async (req, res) => {
  try {
    let path = __dirname + "/files/" + "09/" + 1721722557524 + `.mp4`;
    fs.unlink(path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return res.status(500).json({
          success: false,
          message: "An error occurred while deleting the file",
        });
      }

      res.status(200).json({
        success: true,
        message: "File deleted successfully",
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// *we define a function as this is a reusable code for both image and video upload
async function uploadFileToCloudinary(file, folder, quality) {
  const options = {
    folder: folder,
  };
  if (quality) {
    options.quality = quality;
  }

  console.log(options);
  console.log(`tempFilePath->${file.tempFilePath}`);

  options.resource_type = "auto"; //is for video upload
  return await cloudinary.uploader.upload(file?.tempFilePath, options);
}

// image upload handler -
// ?upload to media server using temp file...for this we also have to add some flags in fileUpload() middleware in index.js file ...after uploading we will store entry in DB and middleware will automatically delete the temp file
exports.imageUpload = async (req, res) => {
  try {
    // fetch the data from req
    const { name, tags, email } = req.body;
    console.log(name, email, tags);

    const file = req.files.imageFile;
    //  the imageFile represent the key/name of the  file that is snet in http request
    console.log(file);

    // validation
    const suppertedTypes = ["jpg", "jpeg", "png"];
    if (!suppertedTypes.includes(file.name.split(`.`)[1].toLowerCase())) {
      //  we use toLowerCase() as in supporetdTypes we define all in lower case only
      return res.status(400).json({
        success: false,
        message: "only jpg , jpeg , png images are supported",
      });
    }

    // file format supported
    const response = await uploadFileToCloudinary(file, "codeHelp"); //codeHelp is the folder name that we creaeted at cloudinary website
    console.log(response);

    // DB save
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response?.secure_url,
    });

    res.status(200).json({
      success: true,
      imageUrl: response?.secure_url,
      message: "image uploaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//* video upload handler
exports.videoUpload = async (req, res) => {
  try {
    const { name, email, tags } = req.body;
    console.log(name, email, tags);

    const file = req.files.videoFile;
    console.log(file);

    const suppertedTypes = ["mp4", "mov"];
    // adding upper limit of 25MB for video
    if (
      !suppertedTypes.includes(file.name.split(`.`)[1].toLowerCase()) ||
      file.size > 25000000
    ) {
      // 25000000 bytes (which is approximately 25 megabytes)
      //  we use toLowerCase() as in supporetdTypes we define all in lower case only
      return res.status(400).json({
        success: false,
        message:
          "eihter file type is not supported or file size limit excedded then 25MB",
      });
    }

    // upload to cloudinary
    const response = await uploadFileToCloudinary(file, "codeHelp");
    console.log(response);

    // DB save
    const fileData = await File.create({
      name,
      email,
      tags,
    });

    res.status(200).json({
      success: true,
      message: "video uploaded successfully",
      url: response.secure_url,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "server error",
      error: error,
    });
  }
};

// imageSizeReducer handler
// ? in this handler we will upload the image with reduced size
exports.imageSizeReducer = async (req, res) => {
  try {
    //  fetch the data from req
    const { name, email, tags } = req.body;
    const file = req.files.file;
    console.log(file);

    // validation
    const suppertedTypes = ["jpg", "jpeg", "png"];
    if (!suppertedTypes.includes(file.name.split(`.`)[1].toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: "only jpg , jpeg , png images are supported",
      });
    }

    const response = await uploadFileToCloudinary(file, "codeHelp", 60); //10,20,30...100
    // or
    // with height and width
    // const options ={
    //     folder:"codeHelp",
    //     width:450,
    //     height:700
    // }
    // options.resource_type = "auto"
    // const response = await cloudinary.uploader.upload(file.tempFilePath ,options )
    console.log(response);

    const createDataInDb = await File.create({
      name,
      email,
      tags,
      imageUrl: response?.secure_url,
    });

    res.status(200).json({
      success: true,
      message: "image uploaded successfully",
      url: response.secure_url,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "server error",
      error: error,
    });
  }
};
