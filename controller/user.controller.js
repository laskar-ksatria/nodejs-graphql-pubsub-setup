const User = require('../models/user.schema');

class UserController {

   static async getAllUser() {
      try {
         return await User.find();
      } catch (error) {
         throw new Error(error);
      }
   };

};

module.exports = UserController;