import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  display_name: String,
  email_id: String,
  phone_number: String,
  country_code: String,
  country_iso3: String,
  country_languages: Map,
  reg_datetime: { type: Date, default: Date.now },
  subscription_datetime: Date,
  subscription_package: String,
  subscription_status: { type: Boolean, default: false },
  user_verified: { type: Boolean, default: false },
  is_blocked: { type: Boolean, default: false },
  last_conv: String,
  partial_streaming: { type: Boolean, default: false },
  message_count: { type: Number, default: 0 },
  audio_count: { type: Number, default: 0 },
  image_count: { type: Number, default: 0 },
  preferred_language: String,
  location: String,
  work: String,
  education: String,
  age: String,
  gender: String,
  relationship_status: String,
  hobbies: String,
  medical_condition: String,
  paymentGateway: String,
  announcement: String,
  usage: {
    type: Map,
    of: Number,
  },
  payment_link: Object,
  payment_amount: String,
  payment_ref_id: String,
  subscription_ref_id: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
