const Champion = require('./championGen');
const actionHit = require('./actionHit');
const { exp, addRegen, addExperience } = require('./experience');
const criticalStrike = require('./criticalStrike');
const { shop, addGold, sell } = require('./shop');


const champion1 = new Champion({
  name: 'Alice',
  ad: 350,
  hp: 500,
  criticalStrike: 100,
  armor: 50,
  maxhp: 1000,
  hpregenStart: 5,
  hpregenEnd: 15,
  armorNvlStart: 5,
  armorNvlEnd: 15,
  exp: 0,
  nvl: 1,
  gold: 1000,
  death: 0,
});
const champion2 = new Champion({
  name: 'Key',
  ad: 100,
  hp: 5000,
  criticalStrike: 100,
  armor: 250,
  mr: 30,
  maxhp: 1000,
  hpregenStart: 5,
  hpregenEnd: 15,
  armorNvlStart: 5,
  armorNvlEnd: 15,
  mrNvlStart: 10,
  mrNvlEnd: 20,
  adNvlStart: 5,
  adNvlEnd: 30,
  exp: 0,
  nvl: 1,
  death: 0,
});

// addExperience(champion2);
actionHit(champion1, champion2);
actionHit(champion1, champion2);
actionHit(champion1, champion2);
actionHit(champion2, champion1);
actionHit(champion2, champion1);
actionHit(champion2, champion1);
// addRegen(champion2);
// addGold(champion1);

// fazer todas as stats do champion gen terem 2 numeros apos a virgula.
// fazer o item.js pegar o id do inventario vasculhar numa lista e o id que tiver pareado adicionar
// os stats do item no champion
// shop(champion1, 1)
// shop(champion1, 2);
// shop(champion1, 3)
// shop(champion1, 1)
// shop(champion1, 2);
// shop(champion1, 3)
// shop(champion1, 4)
// sell(champion1, 1)
