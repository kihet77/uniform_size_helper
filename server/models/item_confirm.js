const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_confirm', {
    school_code: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'school',
        key: 'school_code'
      }
    },
    student_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'student_code'
      }
    },
    item_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'item',
        key: 'item_code'
      }
    },
    item_size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    purchases: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    mending: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'item_confirm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "school_code" },
          { name: "student_code" },
          { name: "item_code" },
        ]
      },
      {
        name: "student_code",
        using: "BTREE",
        fields: [
          { name: "student_code" },
        ]
      },
      {
        name: "item_code",
        using: "BTREE",
        fields: [
          { name: "item_code" },
        ]
      },
    ]
  });
};
