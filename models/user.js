const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  }, //passportlocalmongoose by default generates usename and passport
  // and adds salting and hashing.
  //pbkdf2 hashing algo is used with passport
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);