const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('school', {
    school_code: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    school_level: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    school_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    total_student: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    term: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    visit_student: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'student',
        key: 'student_code'
      }
    },
    item_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'item',
        key: 'item_code'
      }
    }
  }, {
    sequelize,
    tableName: 'school',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "school_code" },
        ]
      },
      {
        name: "visit_student",
        using: "BTREE",
        fields: [
          { name: "visit_student" },
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
