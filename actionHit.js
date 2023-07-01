const { armorEfficiency, mrEfficiency } = require('./defenseEfficiency');



function actionHit(origin, target) {
  var originAd = origin.baseStats.offensive.ad;
  console.log(`Champion 1 hit Champion 2 com ${originAd} de ad`);

  console.log(`Champion 2 tem ${target.baseStats.defensive.armor} de armor`);

  var targetArmorEfficiency = armorEfficiency(target.baseStats.defensive.armor);

  var dmgWithReduction = +(originAd - (originAd * targetArmorEfficiency)).toFixed(2);

  console.log(`${originAd} - (${originAd} * ${targetArmorEfficiency}) = ${dmgWithReduction}`);

  console.log(`${target.baseStats.defensive.hp} - ${dmgWithReduction}`);

  target.baseStats.defensive.hp -= dmgWithReduction;

  console.log(`Champion 2 hp após o hit: ${target.baseStats.defensive.hp}`);
}

module.exports = actionHit;