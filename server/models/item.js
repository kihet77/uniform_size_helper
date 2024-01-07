const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    item_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    item_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    season: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      unique: "idx_item_season"
    },
    category: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    free: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    wearing: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nametag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_code" },
        ]
      },
      {
        name: "idx_item_season",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "season" },
        ]
      },
    ]
  });
};
