const { armorEfficiency, mrEfficiency } = require('./defenseEfficiency');
const criticalStrike = require('./criticalStrike');

function actionHit(origin, target) {
  var critDmg = criticalStrike(origin);

  if (critDmg > 0) {
    console.log('Acerto Crítico!');
    console.log(`Champion 1 hit Champion 2 com ${critDmg} de dano crítico`);
  } else {
    var originAd = origin.baseStats.offensive.ad;
    console.log(`Champion 1 hit Champion 2 com ${originAd} de ad`);
  }

  console.log(`Champion 2 tem ${target.baseStats.defensive.armor} de armor`);

  var targetArmorEfficiency = armorEfficiency(target.baseStats.defensive.armor);

  var dmgWithReduction = +(origin.baseStats.offensive.ad - (origin.baseStats.offensive.ad * targetArmorEfficiency)).toFixed(2);

  var totalDamage = critDmg > 0 ? critDmg - dmgWithReduction : dmgWithReduction;

  console.log(`Dano Total: ${totalDamage}`);

  console.log(`${target.baseStats.defensive.hp} - ${totalDamage}`);

  target.baseStats.defensive.hp -= totalDamage;

  console.log(`Champion 2 hp após o hit: ${target.baseStats.defensive.hp}`);
}

module.exports = actionHit;