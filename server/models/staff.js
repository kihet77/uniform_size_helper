const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('staff', {
    counting: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    staff_name: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    student_in_charge: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'staff',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "counting" },
        ]
      },
    ]
  });
};
