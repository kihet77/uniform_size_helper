const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student', {
    student_code: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    school_code: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'school',
        key: 'school_code'
      }
    },
    student_name: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    call_number: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shoulder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    waist: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    card_pay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cash_pay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    confirm: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    state: {
      type: DataTypes.CHAR(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'student',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "student_code" },
          { name: "school_code" },
        ]
      },
      {
        name: "school_code",
        using: "BTREE",
        fields: [
          { name: "school_code" },
        ]
      },
    ]
  });
};
