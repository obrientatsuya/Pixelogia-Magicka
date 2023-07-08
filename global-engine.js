const Champion = require('./championGen');
const actionHit = require('./actionHit');
const { exp, addRegen, addExperience } = require('./experience');
const criticalStrike = require('./criticalStrike');

const champion1 = new Champion({
  ad: 100,
  hp: 1000,
  criticalStrike: 1,
  armor: 50,
  maxhp: 1000,
  hpregenStart: 5,
  hpregenEnd: 15,
  armorNvlStart: 5,
  armorNvlEnd: 15,
  exp: 0,
  nvl: 1
});
const champion2 = new Champion({
  ad: 100,
  hp: 1000,
  armor: 50,
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
  nvl: 1
});

addExperience(champion2);
actionHit(champion1, champion2);



