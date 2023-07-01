

function mrEfficiency(mr) {
  let efficiency;

  if (mr <= 100) {
    efficiency = mr / 3;
  } else {
    efficiency = 100 / 2;
    efficiency += (mr - 100) / 33;
  }

  if (efficiency >= 60) {
    efficiency = 60;
  } else if (efficiency <= -10) {
    efficiency = -10;
  }

  var efficiencyPercentage = (efficiency / 100).toFixed(2);
  return efficiencyPercentage;
}

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

  var efficiencyPercentage = (efficiency / 100).toFixed(2);
return efficiencyPercentage;
}

module.exports = {
  armorEfficiency: armorEfficiency,
  mrEfficiency: mrEfficiency
};
