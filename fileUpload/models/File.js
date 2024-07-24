// description of data that will be stored in DB
const mongoose = require(`mongoose`);
const nodemailer = require(`nodemailer`)


const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});



// all the pre and post middleware are codedbefore creating the model
// the below is post middleware thet is fired after saving data in DB
fileSchema.post("save" , async(doc)=>{
  // doc (document) is the entry that is created in DB
  try {
      console.log("doc->",doc);

      // import transpoter
      const transporterCreation = require(`../config/transpoter`)
      const transporter = transporterCreation()

      let info = await transporter.sendMail(
        {
          from: `Gursimran_singh`,
          to: doc.email,
          subject: `new file uploaded on cloudinary`,
          html: `<h2>Hello ${doc.name}</h2><p>Your file uploaded successfully</p><p>Uploaded file link = <span><a href=${doc.imageUrl}>${doc.imageUrl}</a></span></p>`,
        }
      )

      console.log("info=>", info);

  } catch (error) {
    console.log(error);
  }
} )

// a model is made of model-name and schema
const File = mongoose.model(`File`, fileSchema);
module.exports = File;
