const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    school_code: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'school',
        key: 'school_code'
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
    store: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    possession: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'student',
        key: 'student_code'
      }
    }
  }, {
    sequelize,
    tableName: 'store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "school_code" },
          { name: "item_code" },
          { name: "store" },
        ]
      },
      {
        name: "item_code",
        using: "BTREE",
        fields: [
          { name: "item_code" },
        ]
      },
      {
        name: "possession",
        using: "BTREE",
        fields: [
          { name: "possession" },
        ]
      },
    ]
  });
};
