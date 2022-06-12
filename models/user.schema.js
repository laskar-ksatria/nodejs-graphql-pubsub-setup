const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Name cannot be empty"],
   },
   email: {
      type: String,
      required: [true, "Email cannot be empty"],
      unique: [true, "Email already taken"]
   },
   password: {
      type: String,
      required: [true, "Password cannot be empty"]
   }
});

module.exports = mongoose.model('User', UserSchema);