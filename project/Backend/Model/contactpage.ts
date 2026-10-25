import mongoose from "mongoose";

const contactpageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  subject: {
    type: String,
    required: true,
    trim: true,
  },

 contact: {
  type: String,
  required: [true, "Contact number is required"],
  trim: true,
  match: [/^[0-9+\-\s()]{7,20}$/, "Please enter a valid phone number"],
},
});

const contactpageModel = mongoose.model(
  "ContactPage",
  contactpageSchema
);

export default contactpageModel;