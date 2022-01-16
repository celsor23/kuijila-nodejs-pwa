const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required!'],
    minlength: [5, 'Name must be at least 5 characters long!']
  },
  email: {
    type: String,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    },
    required: [true, 'Email address required']
  },
  password: {
    type: String,
    validate: {
      validator: function(v) {
        return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/.test(v);
      },
      message: props => `Password must have at least one number and a special character (!, @, #, $, %, ^, &, *), and be between 7-16 characters long. ${props.value} is not a valid password!`
    },
    required: [true, 'Password is required!'],
    minlength: [7, 'Password must be at least 7 characters long!'],
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number (+xxxxxxx...)!`
    },
    required: [true, 'User phone number required']
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