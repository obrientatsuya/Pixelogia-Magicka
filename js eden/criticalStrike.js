function criticalStrike(origin) {
  
  origin.baseStats.offensive.criticalDamage = 0

  let originCriticalStrike = origin.baseStats.offensive.criticalStrike / 100;
  origin.baseStats.offensive.criticalDamage += originCriticalStrike * 1.75;
  
  
  let originCriticalDamage = origin.baseStats.offensive.criticalDamage;

  let isCritical = Math.random() < originCriticalStrike;

  if (isCritical) {
    let originAd = origin.baseStats.offensive.ad;
    let crit = originAd * originCriticalDamage;
    let critDmg = originAd + crit
    return critDmg.toFixed(2); 
  } else {
    return 0;
  }
}
module.exports = criticalStrike;

  