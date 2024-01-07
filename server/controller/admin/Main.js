const { where} = require("sequelize");
const { school } = require("../../models");

exports.main = (req, res) => {
  res.send("data");
};

exports.sidebar = async (req, res) => {
  const schoolInfo = await school.findAll({
    attributes:["school_code", "school_name"],
  });
  console.log(schoolInfo)
  res.send(schoolInfo)
};
