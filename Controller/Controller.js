const instituteModel = require("../Model/Model");
const validateUs = require("../validateMe");

const getTution = async (req, res) => {
  try {
    const tusionGet = await instituteModel.find();
    res.status(200).json({
      message: "Data Gotten Sucessfully",
      data: tusionGet,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to Get Data",
      data: error.message,
    });
  }
};

const getOneTution = async (req, res) => {
  try {
    const tusionOneGet = await instituteModel.findById(req.params.id);
    res.status(200).json({
      message: `${req.params.id} Gotten Sucessfully`,
      data: tusionOneGet,
    });
  } catch (error) {
    res.status(404).json({
      message: ` Failed to Get: ${req.params.id}`,
      data: error.message,
    });
  }
};

const postTution = async (req, res) => {
  try {
    const { error } = validateUs.validateStudent(req.body);
    if (error) {
      res.status(409).json({
        status: "Fail",
        message: error.details[0].message,
      });
    }
    const tusionPost = await instituteModel.create({
      name: req.body.name,
      institution: req.body.institution,
      course: req.body.course,
    });
    res.status(200).json({
      message: "Data Created Sucessfully",
      data: tusionPost,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to Post Data",
      data: error.message,
    });
  }
};

const updateTution = async (req, res) => {
  try {
    const { error } = validateUs.validateStudent(req.body);
    if (error) {
      res.status(409).json({
        status: "Fail",
        message: error.details[0].message,
      });
    }
    const updatedTution = await instituteModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: "true" }
    );
    res.status(200).json({
      data: updatedTution,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { getTution, getOneTution, postTution, updateTution };
