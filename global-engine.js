function Champion(hp, armor, ad) {
  this.hp = hp || 0;
  this.armor = armor || 0;
  this.ad = ad || 0;
}

var champion1 = new Champion(620, 76, 120);
var champion2 = new Champion(800, 76, 120);

function armorEfficiency(armor) {
  let efficiency;

  if (armor <= 100) {
    efficiency = armor / 2;
  } else {
    efficiency = 100 / 2;
    efficiency += armor / 33.33;
  }

  if (efficiency >= 90) {
    efficiency = 90;
  } else if (efficiency <= -20) {
    efficiency = -20;
  }

  var efficiencyPercentage = efficiency / 100;
  console.log("Eficiência da armadura:", efficiencyPercentage);
  return efficiencyPercentage;
}

console.log(`O HP do Champion 2 é: ${champion2.hp}`);

function actionHit(origin, target) {
  var originAd = origin.ad;
  console.log(`Champion 1 hit Champion 2 com ${originAd} de ad`);

  console.log(`Champion 2 tem ${champion2.armor} de armor`);

  var targetArmorEfficiency = armorEfficiency(target.armor);

  var dmgWithReduction = +(originAd - (originAd * targetArmorEfficiency)).toFixed(2);

  console.log(`${originAd} - (${originAd} * ${targetArmorEfficiency}) = ${dmgWithReduction}`);

  console.log(`${target.hp} - ${dmgWithReduction}`);

  target.hp -= dmgWithReduction;

  console.log(`Champion 2 hp após o hit: ${target.hp}`);
}

actionHit(champion1, champion2);
