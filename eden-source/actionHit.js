const { armorEfficiency, mrEfficiency } = require('./defenseEfficiency');
const criticalStrike = require('./criticalStrike');
const death = require('./death');

function actionHit(origin, target) {
if (origin.baseStats.defensive.death === 0) { 
          var critDmg = criticalStrike(origin);
          var targetArmorEfficiency = armorEfficiency(target.baseStats.defensive.armor);
          
          if (critDmg > 0) {
            console.log('Acerto Crítico!');
            console.log(`Champion ${origin.baseStats.name} hit Champion ${target.baseStats.name} ${critDmg} de dano crítico`);
            console.log(`Champion ${target.baseStats.name} tem ${target.baseStats.defensive.armor} de armor`);
            
            var dmgWithReduction = critDmg - (critDmg * targetArmorEfficiency).toFixed(2);
            
            console.log(`Dano Total: ${dmgWithReduction}`);
            target.baseStats.defensive.hp = Math.max(0, target.baseStats.defensive.hp - dmgWithReduction);
            console.log(`Champion ${target.baseStats.name} hp após o hit: ${target.baseStats.defensive.hp}`)

    
          } else {
            var originAd = origin.baseStats.offensive.ad;
            console.log(`Champion ${origin.baseStats.name} hit Champion ${target.baseStats.name} com ${originAd} de ad`);
            console.log(`Champion ${target.baseStats.name} tem ${target.baseStats.defensive.armor} de armor`);
            var dmgWithReduction = +(origin.baseStats.offensive.ad - (origin.baseStats.offensive.ad * targetArmorEfficiency)).toFixed(2);
            console.log(`Dano Total: ${dmgWithReduction}`);
            console.log(`${target.baseStats.defensive.hp} - ${dmgWithReduction}`);
            target.baseStats.defensive.hp = Math.max(0, target.baseStats.defensive.hp - dmgWithReduction);
            console.log(`Champion ${target.baseStats.name} hp após o hit: ${target.baseStats.defensive.hp}`);
            
          }
          
          death(target);

    } else {
    console.log(`Champion ${origin.baseStats.name} Não pode executar actionHit porque está morto.`);
 }


}

module.exports = actionHit;
