function criticalStrike(origin) {
  var originCriticalStrike = origin.baseStats.offensive.criticalStrike;
  var originCriticalDamage = origin.baseStats.offensive.criticalDamage;

  // Atualiza o criticalDamage
  origin.baseStats.offensive.criticalDamage += originCriticalStrike * 0.0075;

  var isCritical = Math.random() < originCriticalStrike;

  if (isCritical) {
    var originAd = origin.baseStats.offensive.ad;
    var critDmg = originAd + (originAd * originCriticalDamage / 100);

    return critDmg;
  }

  return 0; // Retorna 0 se não for um acerto crítico
}



module.exports = criticalStrike;