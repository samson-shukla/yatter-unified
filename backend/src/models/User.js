import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  display_name: String,
  email_id: String,
  phone_number: { type: String, index: true, unique: true, sparse: true },
  country_code: String,
  country_iso3: String,
  country_languages: Map,
  reg_datetime: { type: Date, default: Date.now },
  subscription_datetime: Date,
  subscription_package: String,
  subscription_status: { type: Boolean, default: false },
  user_verified: { type: Boolean, default: false },
  is_blocked: { type: Boolean, default: false },
  partial_streaming: { type: Boolean, default: false },

  // moved counts to chat/messages, so we keep this clean
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

  message_stats: {
    whatsapp: {
      incoming: {
        text: { type: Number, default: 0 },
        image: { type: Number, default: 0 },
        audio: { type: Number, default: 0 },
        video: { type: Number, default: 0 },
      },
      outgoing: {
        text: { type: Number, default: 0 },
        image: { type: Number, default: 0 },
        audio: { type: Number, default: 0 },
        video: { type: Number, default: 0 },
      },
    },
    telegram: {
      incoming: {
        text: { type: Number, default: 0 },
        image: { type: Number, default: 0 },
      },
      outgoing: {
        text: { type: Number, default: 0 },
        image: { type: Number, default: 0 },
      },
    },
    instagram: {
      incoming: { text: { type: Number, default: 0 } },
      outgoing: { text: { type: Number, default: 0 } },
    },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
