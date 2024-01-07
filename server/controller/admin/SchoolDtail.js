const { school, clothing_size, item } = require("../../models");


exports.main = (req, res) => {
  res.send("data");
};

exports.storeItem = async(req, res) => {
  const Item = await clothing_size.findAll({
    attributes:["school_code", "item_code", "size"],
  });
  const ItemInfo = await item.findAll({
    attributes:["item_code", "item_name"],
  })
  console.log(Item, ItemInfo)
  res.send(Item, ItemInfo)
};
