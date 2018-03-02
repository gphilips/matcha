import { dbQuery } from '../models/dbQueries.js';




// UserSchema.pre('save', function (next) {
//   var user = this;
//   if (this.isModified('password') || this.isNew) {
//     bcrypt.genSalt(10, function (err, salt) {
//       if (err) {
//         return next(err);
//       }
//       bcrypt.hash(user.password, salt, function(err, hash) {
//         if (err) {
//           return next(err);
//         }
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     return next();
//   }
// });
//
// UserSchema.pre('save', function (next) {
//     ipInfo((err, cLoc) => {
//         if (!err)
//             this.geolocation = cLoc.loc;
//         else
//             this.geolocation = '0, 0';
//         next();
//     });
// });
//
// UserSchema.methods.comparePassword = function(password, callback) {
//   bcrypt.compare(password, this.password, function(err, isMatch) {
//     if (err) {
//       return callback(err);
//     }
//     callback(null, isMatch);
//   });
// };
//
// const User = mongoose.model('user', UserSchema);
//
// module.exports = User;
