var DataTypes = require("sequelize").DataTypes;
var _clothing_size = require("./clothing_size");
var _item = require("./item");
var _item_confirm = require("./item_confirm");
var _school = require("./school");
var _staff = require("./staff");
var _store = require("./store");
var _student = require("./student");

function initModels(sequelize) {
  var clothing_size = _clothing_size(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var item_confirm = _item_confirm(sequelize, DataTypes);
  var school = _school(sequelize, DataTypes);
  var staff = _staff(sequelize, DataTypes);
  var store = _store(sequelize, DataTypes);
  var student = _student(sequelize, DataTypes);

  item.belongsToMany(school, { as: 'school_code_schools', through: store, foreignKey: "item_code", otherKey: "school_code" });
  school.belongsToMany(item, { as: 'item_code_items', through: store, foreignKey: "school_code", otherKey: "item_code" });
  clothing_size.belongsTo(item, { as: "item_code_item", foreignKey: "item_code"});
  item.hasMany(clothing_size, { as: "clothing_sizes", foreignKey: "item_code"});
  item_confirm.belongsTo(item, { as: "item_code_item", foreignKey: "item_code"});
  item.hasMany(item_confirm, { as: "item_confirms", foreignKey: "item_code"});
  school.belongsTo(item, { as: "item_code_item", foreignKey: "item_code"});
  item.hasMany(school, { as: "schools", foreignKey: "item_code"});
  store.belongsTo(item, { as: "item_code_item", foreignKey: "item_code"});
  item.hasMany(store, { as: "stores", foreignKey: "item_code"});
  clothing_size.belongsTo(school, { as: "school_code_school", foreignKey: "school_code"});
  school.hasMany(clothing_size, { as: "clothing_sizes", foreignKey: "school_code"});
  item_confirm.belongsTo(school, { as: "school_code_school", foreignKey: "school_code"});
  school.hasMany(item_confirm, { as: "item_confirms", foreignKey: "school_code"});
  store.belongsTo(school, { as: "school_code_school", foreignKey: "school_code"});
  school.hasMany(store, { as: "stores", foreignKey: "school_code"});
  student.belongsTo(school, { as: "school_code_school", foreignKey: "school_code"});
  school.hasMany(student, { as: "students", foreignKey: "school_code"});
  item_confirm.belongsTo(student, { as: "student_code_student", foreignKey: "student_code"});
  student.hasMany(item_confirm, { as: "item_confirms", foreignKey: "student_code"});
  school.belongsTo(student, { as: "visit_student_student", foreignKey: "visit_student"});
  student.hasMany(school, { as: "schools", foreignKey: "visit_student"});
  store.belongsTo(student, { as: "possession_student", foreignKey: "possession"});
  student.hasMany(store, { as: "stores", foreignKey: "possession"});

  return {
    clothing_size,
    item,
    item_confirm,
    school,
    staff,
    store,
    student,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
