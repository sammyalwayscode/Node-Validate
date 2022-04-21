const joi = require("@hapi/joi");

const validateStudent = (el) => {
  const studentConstraint = joi.object({
    name: joi.string().required().min(3).max(35),
    institution: joi.string().required(),
    course: joi.string().required(),
  });
  return studentConstraint.validate(el);
};

module.exports.validateStudent = validateStudent;
