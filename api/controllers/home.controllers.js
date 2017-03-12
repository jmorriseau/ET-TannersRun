var mongoose = require ('mongoose');
var Home = mongoose.model('Home');
module.exports.sponsorsGetAll = function(req, res){

  Home
    .find()
    .exec(function(err, sponsors){
      if(err){
        console.log("Error finding sponsors");
        res
          .status(500)
          .json(err);
      }
      else {
        console.log("Found sponsors ", sponsors.length);
        console.log("Home: " + Home);
        res
          .json(sponsors);
      }
    });

};

// module.exports.hotelsAddOne = function(req, res){
//   Hotel
//     .create({
//       name : req.body.name,
//       description : req.body.description,
//       stars : parseInt(req.body.stars, 10),
//       services : _splitArray(req.body.services),
//       photos : _splitArray(req.body.photos),
//       currency : req.body.currency,
//       location : {
//         address : req.body.address,
//         coordinates : [
//           parseFloat(req.body.lng),
//           parseFloat(req.body.lat)
//         ]
//       }
//     }, function(err, hotel){
//       if(err){
//         console.log("Error creating hotel");
//         res
//           .status(404)
//           .json(err);
//       }
//       else {
//         console.log("Hotel created", hotel);
//         res
//           .status(201)
//           .json(hotel);
//       }
//     });
// };

//update an existing hotel
// module.exports.hotelsUpdateOne = function(req, res){
//   var hotelId = req.params.hotelId;
//   console.log("GET hotelId", hotelId);
//
//   Hotel
//     .findById(hotelId)
//     .select("-reviews -rooms")
//     .exec(function(err, doc){
//       var response = {
//         status : 200,
//         message : doc
//       };
//
//       if(err){
//         console.log("Error finding hotel");
//         response.status = 500;
//         response.messge = err;
//       }
//       else if (!doc){
//         console.log("HotelId not found in database", id);
//         response.status = 404;
//         response.message = {
//             "message" : "Hotel ID not found" + id
//           };
//       }
//       if(response.status !== 200){
//         res
//           .status(response.status)
//           .json(response.message);
//       }
//       else {
//         doc.name = req.body.name;
//         doc.description = req.body.description;
//         doc.stars = parseInt(req.body.stars, 10);
//         doc.services = _splitArray(req.body.services);
//         doc.photos = _splitArray(req.body.photos);
//         doc.currency = req.body.currency;
//         doc.location = {
//           address : req.body.address,
//           coordinates : [
//             parseFloat(req.body.lng),
//             parseFloat(req.body.lat)
//           ]
//         };
//
//         doc.save(function(err, hotelUpdated){
//           if(err){
//             res
//               .status(500)
//               .json(err);
//           }
//           else {
//             res
//               .status(204)
//               .json();
//           }
//         })
//
//       }
//
//     });
// };
//
// //delete a specific hotel
// module.exports.hotelsDeleteOne = function(req, res){
//   var hotelId = req.params.hotelId;
//
//   Hotel
//     .findByIdAndRemove(hotelId)
//     .exec(function(err, hotel){
//       if(err){
//         res
//           .status(404)
//           .json(err);
//       }
//       else {
//         console.log("Hotel deleted, id:", hotelId);
//         res
//           .status(204)
//           .json();
//       }
//     });
// };
