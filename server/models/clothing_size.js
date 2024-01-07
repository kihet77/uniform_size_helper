const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clothing_size', {
    school_code: {
      type: DataTypes.STRING(4),
      allowNull: true,
      references: {
        model: 'school',
        key: 'school_code'
      }
    },
    item_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'item',
        key: 'item_code'
      }
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'clothing_size',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "size" },
        ]
      },
      {
        name: "school_code",
        using: "BTREE",
        fields: [
          { name: "school_code" },
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
