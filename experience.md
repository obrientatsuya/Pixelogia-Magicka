```javascript
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
```

Essa função `exp` é responsável por calcular o nível (`nivel`) do campeão com base na quantidade de experiência (`exp`) acumulada. Vamos percorrer linha por linha:

- A função recebe um objeto chamado `champion` como parâmetro.
- Verifica se a experiência (`exp`) do campeão é igual a 0. Se for, define o nível (`nivel`) como 1.
- Caso contrário, é criado um array `xpReqs` que armazena os requisitos de experiência para cada nível. Esse array contém 18 elementos correspondentes aos requisitos de experiência para cada nível de 1 a 18.
- Inicializa a variável `nivel` com o valor 1.
- Enquanto `nivel` for menor ou igual a 18 e a experiência (`exp`) do campeão for maior ou igual ao requisito de experiência para o próximo nível (`xpReqs[nivel]`), incrementa o valor de `nivel`.
- Atualiza a propriedade `nivel` do objeto `champion` com o valor calculado.
- Chama a função `calculateHpregen` passando o nível atual (`nivel`) e a propriedade `hpregen` do objeto `champion`. Essa função calculará o valor atualizado do `hpregen` com base no nível.
- Atualiza a propriedade `value` da propriedade `hpregen` do objeto `champion` com o valor retornado pela função `calculateHpregen`.
- Exibe no console o valor atualizado do `hpregen` com a mensagem "HP Regen Atual: {valor}".
- Retorna o valor do `nivel` do campeão.

Em seguida, temos a função `calculateHpregen`:

```javascript
function calculateHpregen(nivelAtual, hpregen) {
  const nivelMaximo = 18;
  const incremento = (hpregen.end - hpregen.start) / (nivelMaximo - 1);
  const hpregenAtual = (hpregen.start + (incremento * (nivelAtual - 1))).toFixed(2);
  return parseFloat(hpregenAtual);
}
```

Essa função calcula o valor atualizado do `hpregen` com base no nível atual (`nivelAtual`) e nas propriedades `start` e `end` do objeto `hpregen`.


- A função recebe o `nivelAtual` e o objeto `hpregen` como parâmetros.
- Define a constante `nivelMaximo` com o valor 18, representando o nível máximo.
- Calcula o valor do incremento dividindo a diferença entre `end` e `start` pela diferença entre `nivelMaximo - 1`.
- Calcula o `hpregenAtual` somando o `start` com o incremento multiplicado pelo `nivelAtual - 1`. O resultado é arredondado para 2 casas decimais usando `toFixed(2)`.
- Retorna o `hpregenAtual` convertido para o tipo `float`.

Agora, vamos analisar a função `addRegen`:

```javascript
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
```

Essa função é responsável por adicionar regeneração de HP ao campeão em intervalos de 5 segundos. 

- A função recebe o objeto `champion` como parâmetro.
- Utiliza a função `setInterval` para executar uma função a cada 5 segundos.
- Dentro da função anônima passada para o `setInterval`:
  - Armazena o valor atual do HP do campeão na variável `previousHp`.
  - Verifica se o HP do campeão é menor do que o HP máximo (`maxhp`). Se for, realiza as seguintes operações:
    - Adiciona o valor do `hpregen.value` ao HP do campeão.
    - Garante que o HP do campeão não ultrapasse o HP máximo utilizando `Math.min`.
    - Arredonda o HP do campeão para 2 casas decimais usando `toFixed(2)`.
    - Exibe no console uma mensagem informando o aumento do HP, mostrando o HP anterior e o HP atual.
  - Verifica se o HP do campeão é igual ao HP máximo. Se for, exibe no console uma mensagem informando que o HP já está no máximo e não há cura adicional.
- O intervalo entre as execuções da função é de 5 segundos (5000 milissegundos).

Por fim, temos a função `addExperience`:

```javascript
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
```

Essa função é responsável por adicionar experiência ao campeão a cada 5 segundos. 

- A função recebe o objeto `champion` como parâmetro.
- Cria uma constante `intervalId` para armazenar o ID

 do intervalo retornado por `setInterval`.
- Dentro da função anônima passada para o `setInterval`:
  - Adiciona 180 pontos de experiência (`exp`) ao campeão.
  - Exibe no console uma mensagem informando o novo valor da experiência.
  - Chama a função `exp` passando o objeto `champion` como argumento para atualizar o nível e o `hpregen` do campeão.
  - Exibe no console o nível atual do campeão.
  - Verifica se o nível atual é maior ou igual a 18 (nível máximo). Se for, interrompe o intervalo utilizando `clearInterval`.
  - Exibe no console uma mensagem informando que o campeão atingiu o nível máximo.
- O intervalo entre as execuções da função é de 5 segundos (5000 milissegundos).

Essas são as explicações linha por linha do código fornecido.
