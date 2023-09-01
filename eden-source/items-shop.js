// const Item = require('./itemGen');

function ShopItem(id, name, price, recipe, sellPrice) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.recipe = recipe;
  this.sellPrice = sellPrice;
}

const itemsData = [
  new ShopItem(1, 'Bota', 100, null, 50),
  new ShopItem(2, 'Armor', 100, null, 50),
  new ShopItem(3, 'Tabi', 300, [1, 2], 150),
  new ShopItem(4, 'Super Tabi', 600, [3, 3], 300),

];


// const Bota = new Item({ 
//   id: 1,
//   ad: 20

// });

// const Armor = new Item({ 
//   id: 2,
//   armor: 20,

// });







const simplifiedItemsData = itemsData.map(({ id, name, price, recipe, sellPrice}) => ({ id, name, price, recipe, sellPrice }));
module.exports = simplifiedItemsData;