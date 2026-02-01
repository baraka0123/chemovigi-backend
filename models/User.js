const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["patient", "clinician"], required: true },
  licenseNumber: { type: String }, // only for clinician
  specialty: { type: String },     // only for clinician
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
