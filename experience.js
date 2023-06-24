function Champion(params) {
  this.baseStats = {
    

    offensive: {
      armorPen: params.armorPen || 0,
      ad: params.ad || 0,
      atqSpeed: params.atqSpeed || 0,
      criticalStrike: params.criticalStrike || 0,
      criticalDamage: params.criticalDamage || 0,
      lifesteal: params.lifesteal || 0
    },


    defensive: {
      armor: params.armor || 0,
      hp: params.hp || 0,
      hpregen: {
        value: params.hpregen || 0,
        start: params.hpregenStart || 0,
        end: params.hpregenEnd || 0
      },
      mr: params.mr || 0,
      maxhp: params.maxhp || 0
    },


    magic: {
      ap: params.ap || 0,
      cdr: params.cdr || 0,
      mrPen: params.mrPen || 0,
      mana: params.mana || 0,
      manaregen: {
        value: params.manaregen || 0,
        start: params.manaregenStart || 0,
        end: params.manaregenEnd || 0
      },
      magicVamp: params.magicVamp || 0
    },


    niveling: {
      exp: params.exp || 0,
      nvl: params.nvl || 0
    }
  };


    this.skills = {
    skill1: {
      name: params.skill1Name || '',
      attributes: {
        area: params.skill1Area || '',
        cost: params.skill1Cost || '',
        cooldown: params.skill1Cooldown || ''
      },
      niveling: params.skill1Niveling || {}
    },
  };
}


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

addExperience(champion1);
addRegen(champion1);
