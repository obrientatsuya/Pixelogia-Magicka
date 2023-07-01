const Champion = require('./championGen');
const actionHit = require('./actionHit');
const { exp, addRegen, addExperience } = require('./experience');

var champion1 = new Champion({
  armorPen: 10,
  ad: 120,
  atqSpeed: 1.5,
  criticalStrike: 0.2,
  criticalDamage: 2.5,
  lifesteal: 0.1,
  armor: 100,
  hp: 2000,
  hpregen: 50,
  hpregenStart: 5.5,
  hpregenEnd: 14.85,
  mr: 80,
  ap: 150,
  cdr: 0.2,
  mrPen: 15,
  mana: 1000,
  manaregen: 20,
  manaregenStart: 3.5,
  manaregenEnd: 8.2,
  magicVamp: 0.1,
  maxhp: 2100,
  exp: 0,
  nvl: 1,
  skill1Name: 'Fireball',
  skill1Area: 0,
  skill1Cost: 0,
  skill1Cooldown: 0, 
  skill1Niveling: {
    exp: 0,
    nvl: 1
  },
});

var champion2 = new Champion({
  armorPen: 10,
  ad: 120,
  atqSpeed: 1.5,
  criticalStrike: 0.2,
  criticalDamage: 2.5,
  lifesteal: 0.1,
  armor: 100,
  hp: 2000,
  hpregen: 50,
  hpregenStart: 5.5,
  hpregenEnd: 14.85,
  mr: 80,
  ap: 150,
  cdr: 0.2,
  mrPen: 15,
  mana: 1000,
  manaregen: 20,
  manaregenStart: 3.5,
  manaregenEnd: 8.2,
  magicVamp: 0.1,
  maxhp: 2100,
  exp: 0,
  nvl: 1,
  skill1Name: 'Fireball',
  skill1Area: 0,
  skill1Cost: 0,
  skill1Cooldown: 0, 
  skill1Niveling: {
    exp: 0,
    nvl: 1
  },
});

console.log(`O HP do Champion 1 é: ${champion1.baseStats.defensive.hp}`);



actionHit(champion1, champion2);
addRegen(champion2)


