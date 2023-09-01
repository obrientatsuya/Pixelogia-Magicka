function death(champion) {
  if (champion.baseStats.defensive.hp <= 0) {
    console.log(`Champion ${champion.baseStats.name} morreu!`);
    champion.baseStats.defensive.death = 1; // Define o valor de live como 0 se o HP for igual a 0
    
    let reviveTimeInSeconds = 8 + champion.baseStats.niveling.nvl*2;
    console.log(`Reviverá em ${reviveTimeInSeconds} segundos.`);
    
    const intervalId = setInterval(() => {
      if (reviveTimeInSeconds > 0) {
        console.log(`Tempo restante para reviver: ${reviveTimeInSeconds} segundos.`);
        reviveTimeInSeconds--;
     
      } else {
        clearInterval(intervalId);
        champion.baseStats.defensive.hp = champion.baseStats.defensive.maxhp;
        champion.baseStats.defensive.death = 0;
        console.log(`Champion ${champion.baseStats.name} revivido!`);
      }
    }, 1000); // Atualiza a cada segundo
  }
}

module.exports = death;