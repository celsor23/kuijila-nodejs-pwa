const mongoose = require("mongoose");

const { Schema } = mongoose;

const verificationTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, 'userId required!'],
  },
  token: {
    type: String,
    required: [true, 'token required!']
  }
});

const VerificationToken = mongoose.model("Verification_Token", verificationTokenSchema);

module.exports = VerificationToken;