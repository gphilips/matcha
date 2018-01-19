import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import ipInfo from 'ipinfo';
import GeoSchema from './Geolocation';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, unique: true},
    gender: {type: String, enum: ['male', 'female', 'both']},
    orientation: {type: String, enum: ['male', 'female', 'both']},
    geolocation: GeoSchema,
    connected: {
        type: Boolean,
        default: false
    },
    available: {
        type: Boolean,
        default: false
    },
    avatar: {type: String},
    pictures: {type: [String]},
    bio: {type: String},
    likes: {type: Number},
    likedBy: {type: [String]},
    visits: {type: Number},
    visitedBy: {type: [String]},
    matches: {type: [String]},
    block: {type: [String]},
    blockedBy: {type: [String]},
    confirmToken: {type: String},
});

UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.pre('save', function (next) {
    ipInfo((err, cLoc) => {
        if (!err)
            this.geolocation = cLoc.loc;
        else
            this.geolocation = '0, 0';
        next();
    });
});

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
