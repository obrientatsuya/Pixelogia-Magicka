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
console.log("Eficiência da resistência mágica:", mrEfficiency(76));
console.log("Eficiência da resistência mágica:", mrEfficiency(100));
console.log("Eficiência da resistência mágica:", mrEfficiency(150));
console.log("Eficiência da resistência mágica:", mrEfficiency(250));
