//import User from'../models/users.js';
import mysql from 'mysql';
import randtoken from 'rand-token';
import sendmail from 'sendmail';
import { dbQuery } from './dbQueries.js';

const getUser = (username, field, where = NULL) => {
  let req = "SELECT ${username} FROM ${field}";
  if (where)
    req += "WHERE ${where}";
  let result = dbQuery(req);
  return (result);
};

// const setUser = (username, field, where = NULL) => {
//   let req = "INSERT INTO ${field} (username) ${username}";
//   if (where)
//     req += "WHERE ${where}";
//   let result = dbQuery(req);
//   return (result);
// };




    // User.findOne({[field]: username})
    // .then(user => {
    //     return callback(user);
    // })
    // .catch(err => {
    //     console.error('Error: ', err);
    //     return null;
    // });
//};

// const createUser = (req, callback) => {
//     const token = randtoken.generate(20);
//     req.confirmToken = token;
//     User.create(req)
//     .then(user => {
//         sendmail({
//             from: 'no-reply@matcha.com',
//             to: user.email,
//             subject: 'Confirm your account',
//             html: `Your account has been successfully registered.\n
//                 Click on this link to confirm your account :\n
//                 ${token} `
//             }, function(err, reply) {
//                 console.log(err && err.stack);
//                 console.dir(reply);
//             }
//         );
//         return callback(true, "An email has been sent to confirm your account.");
//     })
//     .catch(err => {
//         if (err)
//             return callback(false, err);
//     });
// };
//
// const getNearestUsers = function(req, res) {
//     User.geoNear(
//         {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
//         {maxDistance: req.query.distance, spherical: true} // maxDistance : 100000
//     )
//     .then(users => {
//         if (!users)
//             return res.status(500).send({
//                 success: false,
//                 message: "There is no user"
//             });
//         return res.send(users);
//     })
//     .catch(err => {
//         console.error('Error ', err);
//         return null;
//     });
// };

// module.exports = {
//     getUser
//    createUser,
//    getNearestUsers
//};
