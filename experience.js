function Champion(params) {
  this.hp = params.hp || 0;
  this.armor = params.armor || 0;
  this.ad = params.ad || 0;
  this.mr = params.mr || 0;
  this.exp = params.exp || 0;
  this.nivel = params.nivel || 0;
  this.hpregen = {
    value: params.hpregen || 0,
    start: params.start || 0,
    end: params.end || 0
  };
  this.maxhp = params.maxhp || 0;
}

var champion1 = new Champion({
  hp: 620,
  armor: 76,
  ad: 120,
  mr: 76,
  exp: 0,
  nivel: 0,
  hpregen: 0,
  maxhp: 800,
  start: 5.5,
  end: 14.85
});

function exp(champion) {
  if (champion.exp === 0) {
    champion.nivel = 1;
  } else {
    const xpReqs = [0, 280, 660, 1140, 1720, 2400, 3180, 4060, 5040, 6120, 7300, 8580, 9960, 11440, 13020, 14700, 16480, 18360];
    let nivel = 1;

    while (nivel <= 18 && champion.exp >= xpReqs[nivel]) {
      nivel++;
    }

    champion.nivel = nivel;
    champion.hpregen.value = calculateHpregen(nivel, champion.hpregen); // Atualiza o valor do hpregen no objeto champion
    console.log(`HP Regen Atual: ${champion.hpregen.value}`);
  }

  return champion.nivel;
}

function calculateHpregen(nivelAtual, hpregen) {
  const nivelMaximo = 18;
  const incremento = (hpregen.end - hpregen.start) / (nivelMaximo - 1);
  const hpregenAtual = (hpregen.start + (incremento * (nivelAtual - 1))).toFixed(2);
  return parseFloat(hpregenAtual);
}

function addRegen(champion) {
  setInterval(function() {
    const previousHp = champion.hp;
    if (champion.hp < champion.maxhp) {
      champion.hp += champion.hpregen.value;
      champion.hp = Math.min(champion.hp, champion.maxhp);
      champion.hp = parseFloat(champion.hp.toFixed(2));
      console.log(`HP increased from ${previousHp} to ${champion.hp}`);
    }
    if (champion.hp === champion.maxhp) {
      console.log(`HP is already at maximum (${champion.hp}). No further healing.`);
    }
  }, 5000);
}

function addExperience(champion) {
  const intervalId = setInterval(function() {
    champion.exp += 180;
    console.log("Novo XP:", champion.exp);
    const nivelAtual = exp(champion);
    console.log("Nível:", nivelAtual);

    if (nivelAtual >= 18) {
      clearInterval(intervalId);
      console.log("O campeão atingiu o nível máximo.");
    }
  }, 5000);
}

addExperience(champion1);
addRegen(champion1);
