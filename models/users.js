const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 7
  },
  phoneNumber: {
    type: String,
    required: true
  },
  accountType: {
    type: String,
    required: true,
    enum: [ 'estudante','tutor'],
    default: 'estudante'
  },
});

const User = mongoose.model("User", userSchema);

module.export = User;