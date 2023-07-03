function exp(champion) {
  if (champion.baseStats.niveling.exp === 0) {
    champion.baseStats.niveling.nvl = 1;
  } else {
    const xpReqs = [0, 280, 660, 1140, 1720, 2400, 3180, 4060, 5040, 6120, 7300, 8580, 9960, 11440, 13020, 14700, 16480, 18360];
    let nivel = 1;

    while (nivel <= 18 && champion.baseStats.niveling.exp >= xpReqs[nivel]) {
      nivel++;
    }

    champion.baseStats.niveling.nvl = nivel;
    champion.baseStats.defensive.hpregen.value = calculateHpregen(nivel, champion.baseStats.defensive.hpregen); // Atualiza o valor do hpregen no objeto champion
    console.log(`HP Regen Atual: ${champion.baseStats.defensive.hpregen.value}`);
  }

  return champion.baseStats.niveling.nvl;
}

function calculateHpregen(nivelAtual, hpregen) {
  const nivelMax = 18;
  const increment = (hpregen.end - hpregen.start) / (nivelMax - 1);
  const hpregenAtual = (hpregen.start + (increment * (nivelAtual - 1))).toFixed(2);
  return parseFloat(hpregenAtual);
}

function addRegen(champion) {
  setInterval(function() {
    const previousHp = champion.baseStats.defensive.hp;
    if (champion.baseStats.defensive.hp < champion.baseStats.defensive.maxhp) {
      champion.baseStats.defensive.hp += champion.baseStats.defensive.hpregen.value;
      champion.baseStats.defensive.hp = Math.min(champion.baseStats.defensive.hp, champion.baseStats.defensive.maxhp);
      champion.baseStats.defensive.hp = parseFloat(champion.baseStats.defensive.hp.toFixed(2));
      console.log(`HP increased from ${previousHp} to ${champion.baseStats.defensive.hp}`);
    }
    if (champion.baseStats.defensive.hp === champion.baseStats.defensive.maxhp) {
      console.log(`HP is already at maximum (${champion.baseStats.defensive.hp}). No further healing.`);
    }
  }, 5000);
}

function addExperience(champion) {
  const intervalId = setInterval(function() {
    champion.baseStats.niveling.exp += 180;
    console.log("Novo XP:", champion.baseStats.niveling.exp);
    const nivelAtual = exp(champion);
    console.log("Nível:", nivelAtual);

    if (nivelAtual >= 18) {
      clearInterval(intervalId);
      console.log("O campeão atingiu o nível máximo.");
    }
  }, 5000);
}

module.exports = {
  exp: exp,
  addExperience: addExperience,
  addRegen: addRegen
  };
