# Experience
Aqui, declaramos uma função chamada exp que recebe um parâmetro champion. Essa função será usada para calcular o nível do campeão com base na experiência.
```javascript
function exp(champion) {
  // A função 'exp' verifica a experiência do campeão e atualiza seu nível

  if (champion.baseStats.niveling.exp === 0) {
    // Se a experiência do campeão for igual a 0, define o nível como 1
    champion.baseStats.niveling.nvl = 1;
  } else {
    const xpReqs = [0, 280, 660, 1140, 1720, 2400, 3180, 4060, 5040, 6120, 7300, 8580, 9960, 11440, 13020, 14700, 16480, 18360];
    // Lista de requisitos de experiência para cada nível (do nível 1 ao 18)
    let nivel = 1;

    while (nivel <= 18 && champion.baseStats.niveling.exp >= xpReqs[nivel]) {
      // Enquanto o nível atual for menor ou igual a 18 e a experiência atual for maior ou igual ao requisito de experiência para o próximo nível
      nivel++;
    }

    champion.baseStats.niveling.nvl = nivel;
    // Atualiza o nível do campeão com o novo nível calculado

    champion.baseStats.defensive.hpregen.value = calculateHpregen(nivel, champion.baseStats.defensive.hpregen);
    // Atualiza o valor de regeneração de HP do campeão com base no novo nível
    console.log(`HP Regen Atual: ${champion.baseStats.defensive.hpregen.value}`);
    // Exibe o valor atual de regeneração de HP do campeão no console
  }

  return champion.baseStats.niveling.nvl;
  // Retorna o nível do campeão
}
```
Nesse trecho da função exp, verificamos se a experiência do campeão é igual a zero. Se for, definimos o nível do campeão como 1. Caso contrário, temos um array xpReqs que armazena os requisitos de experiência para cada nível. O loop while percorre esse array até encontrar o nível correto com base na experiência fornecida. Em seguida, o nível é atualizado no objeto champion e o valor de regeneração de HP é calculado usando a função calculateHpregen. O valor atualizado de regeneração de HP é exibido no console.

# Calculate HpRegen
```javascript
function calculateHpregen(nivelAtual, hpregen) {
  // A função 'calculateHpregen' calcula a regeneração de HP com base no nível atual do campeão

  const nivelMax = 18;
  const increment = (hpregen.end - hpregen.start) / (nivelMax - 1);
  // Calcula o incremento de regeneração de HP por nível
  const hpregenAtual = (hpregen.start + (increment * (nivelAtual - 1))).toFixed(2);
  // Calcula o valor de regeneração de HP atual com base no nível atual
  return parseFloat(hpregenAtual);
  // Retorna o valor de regeneração de HP atualizado
}
```
A função calculateHpregen recebe o nível atual e o objeto hpregen como parâmetros. Ela calcula o valor atual de regeneração de HP com base no nível atual e nas propriedades start e end do objeto hpregen. O valor calculado é retornado como um número de ponto flutuante.

# regen per 5s
```javascript
function addRegen(champion) {
  // A função 'addRegen' adiciona regeneração de HP contínua ao campeão

  setInterval(function() {
    // Executa a função a cada 5 segundos

    const previousHp = champion.baseStats.defensive.hp;
    // Salva o valor anterior de pontos de vida do campeão

    if (champion.baseStats.defensive.hp < champion.baseStats.defensive.maxhp) {
      // Se os pontos de vida do campeão forem menores que os pontos de vida máximos
      champion.baseStats.defensive.hp += champion.baseStats.defensive.hpregen.value;
      // Adiciona a regeneração de HP aos pontos de vida do campeão
      champion.baseStats.defensive.hp = Math.min(champion.baseStats.defensive.hp, champion.baseStats.defensive.maxhp);
      // Garante que os pontos de vida do campeão não ultrapassem os pontos de vida máximos
      champion.baseStats.defensive.hp = parseFloat(champion.baseStats.defensive.hp.toFixed(2));
      // Arredonda o valor dos pontos de vida para 2 casas decimais
      console.log(`HP increased from ${previousHp} to ${champion.baseStats.defensive.hp}`);
      // Exibe a mensagem de aumento de pontos de vida no console
    }

    if (champion.baseStats.defensive.hp === champion.baseStats.defensive.maxhp) {
      // Se os pontos de vida do campeão forem iguais aos pontos de vida máximos
      console.log(`HP is already at maximum (${champion.baseStats.defensive.hp}). No further healing.`);
      // Exibe a mensagem de que os pontos de vida já estão no máximo e não há cura adicional
    }
  }, 5000);
}
```
A função addRegen é usada para adicionar regeneração de HP ao campeão. Dentro dessa função, usamos setInterval para executar um trecho de código em um intervalo de tempo específico (neste caso, a cada 5 segundos). Verificamos se a HP do campeão é menor que a HP máxima. Se for, adicionamos o valor de regeneração de HP ao total da HP do campeão, limitando-o à HP máxima. Em seguida, exibimos no console a quantidade de HP anterior e a quantidade de HP atualizada. Se a HP já estiver no máximo, uma mensagem é exibida informando que não há mais cura disponível.

# Add Exp
```javascript
function addExperience(champion) {
  // A função 'addExperience' adiciona experiência contínua ao campeão

  const intervalId = setInterval(function() {
    // Executa a função a cada 5 segundos

    champion.baseStats.niveling.exp += 180;
    // Adiciona 180 pontos de experiência ao campeão
    console.log("Novo XP:", champion.baseStats.niveling.exp);
    // Exibe o novo valor de experiência no console

    const currentLevel = exp(champion);
    // Verifica o nível atual do campeão

    if (currentLevel === 18) {
      // Se o campeão atingiu o nível máximo (18)
      clearInterval(intervalId);
      // Interrompe a adição de experiência contínua
      console.log("Champion reached maximum level (18).");
      // Exibe a mensagem de que o campeão atingiu o nível máximo no console
    }
  }, 5000);
}
```
A função addExperience é usada para adicionar experiência ao campeão. Dentro dessa função, usamos setInterval para adicionar 180 pontos de experiência ao campeão a cada 5 segundos. Exibimos no console o novo valor de experiência e o nível atual do campeão, obtido chamando a função exp. Se o nível atual for igual ou maior que 18, interrompemos a adição de experiência e exibimos uma mensagem informando que o campeão atingiu o nível máximo.

```javascript
addExperience(champion1);
addRegen(champion1);
```
Essas duas linhas de código chamam as funções addExperience e addRegen, passando o objeto champion1 como argumento. Isso inicia os processos de adição de experiência e regeneração de HP para o campeão.
