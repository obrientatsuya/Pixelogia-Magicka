function exp(champion) {
  if (champion.baseStats.niveling.exp === 0) {
    champion.baseStats.niveling.nvl = 1;
  } else {
    const xpReqs = [0, 280, 660, 1140, 1720, 2400, 3180, 4060, 5040, 6120, 7300, 8580, 9960, 11440, 13020, 14700, 16480, 18360];
    let nivel = 1;

    while (nivel <= 18 && champion.baseStats.niveling.exp >= xpReqs[nivel]) {
      nivel++;
    }
   if (nivel > champion.baseStats.niveling.nvl) { // Verifica se o nível aumentou
      champion.baseStats.niveling.nvl = nivel;
      updateStatsByLevel(champion); // Atualiza os atributos quando o nível muda
    }
  
   champion.baseStats.niveling.hpregen.value = calculateHpregen(nivel, champion.baseStats.niveling.hpregen); // Atualiza o valor do hpregen no objeto champion
      
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
      const nivelAtual = exp(champion); // Obtém o nível atual
      const hpregenAtual = calculateHpregen(nivelAtual, champion.baseStats.niveling.hpregen); // Calcula o hpregen atual

      champion.baseStats.niveling.hpregen.value = hpregenAtual; // Atualiza o valor de hpregen no objeto champion
      champion.baseStats.defensive.hp += champion.baseStats.niveling.hpregen.value;
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

function calculateStatByLevel(level, start, end) {
  const maxLevel = 18;
  const increment = (end - start) / (maxLevel - 1);
  const statValue = start + increment * (level - 1);
  return parseFloat(statValue.toFixed(2));
}

function updateStatsByLevel(champion) {
  const level = champion.baseStats.niveling.nvl;

  champion.baseStats.niveling.adNvl.value = calculateStatByLevel(level, champion.baseStats.niveling.adNvl.start, champion.baseStats.niveling.adNvl.end);
  champion.baseStats.niveling.armorNvl.value = calculateStatByLevel(level, champion.baseStats.niveling.armorNvl.start, champion.baseStats.niveling.armorNvl.end);
  champion.baseStats.niveling.mrNvl.value = calculateStatByLevel(level, champion.baseStats.niveling.mrNvl.start, champion.baseStats.niveling.mrNvl.end);


  champion.baseStats.offensive.ad += champion.baseStats.niveling.adNvl.value;
  champion.baseStats.defensive.armor += champion.baseStats.niveling.armorNvl.value;
  champion.baseStats.defensive.mr += champion.baseStats.niveling.mrNvl.value;
  
  console.log(`Champion updated stats at level ${level}:`);
  console.log(`Armor: ${champion.baseStats.defensive.armor}`);
  console.log(`MR: ${champion.baseStats.defensive.mr}`);
  console.log(`AD: ${champion.baseStats.offensive.ad}`);
  console.log(`HP Regen Atual: ${champion.baseStats.niveling.hpregen.value}`);
}




module.exports = {
  exp: exp,
  addExperience: addExperience,
  addRegen: addRegen
};