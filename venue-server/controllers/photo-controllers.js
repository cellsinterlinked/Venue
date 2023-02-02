const HttpError = require("../models/http-error");
const Photo = require("../models/photo");
const { validationResult } = require("express-validator");
const { cloudinary } = require("../utils/cloudinary");

const createPhoto = async (req, res, next) => {

console.log('it got through to the controller')

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(
//       new HttpError(
//         "Invalid inputs passed. Make sure all inputs have been filled out.",
//         422
//       )
//     );
//   }

  console.log("well it got in");

//   const { images } = req.body;

//   console.log(images)

//   console.log("these are the images", images)

//   const uploadFunction = async (uploadedImages) => {
//     let imageUrlArray = [];
//     if (!uploadedImages || uploadedImages.length < 0) {
//       return imageUrlArray;
//     }

//     let uploadedResponse;
//     for (const image of uploadedImages) {
//       try {
//         console.log("its trying to upload");
//         uploadedResponse = await cloudinary.uploader.upload(image, {
//           upload_preset: "venue_preset",
//         });
//         console.log("this is the response", uploadedResponse);
//       } catch (err) {
//         const error = new HttpError(
//           "Couldnt upload this image to cloudinary",
//           500
//         );
//         console.log("this is the error", err);
//         return next(error);
//       }
//       imageUrlArray.push(uploadedResponse.url);
//     }

//     return imageUrlArray;
//   };

//   //error seems to start here

//   const imageURLs = await uploadFunction(images);

//   for (let image of imageURLs) {
//     let newPhoto = new Photo({
//       photo: image,
//     });
//     try {
//       newPhoto.save();
//     } catch (err) {
//       const error = new HttpError(`error saving image ${err}`);
//     }
//   }

  res.status(200).json({ message: "photos submitted" });
};

exports.createPhoto = createPhoto;
