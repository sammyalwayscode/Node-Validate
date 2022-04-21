const mongoose = require("mongoose");
const instituteSchema = mongoose.Schema({
  name: {
    type: String,
  },
  institution: {
    type: String,
  },
  course: {
    type: String,
  },
});

const instituteModel = mongoose.model("InstituteValidate", instituteSchema);
module.exports = instituteModel;
