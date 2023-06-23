# Eden-Engine

### Output:
```batch
O HP do Champion 2 é: 800
Champion 1 hit Champion 2 com 120 de ad
Champion 2 tem 76 de armor
Eficiência da armadura: 0.38
120 - (120 * 0.38) = 74.4
800 - 74.4
Champion 2 hp após o hit: 725.6
```

# Start
O objeto abaixo foi refatorado por conter muitos parametros ->

```batch
function Champion(hp, armor, ad) {
  this.hp = hp || 0;
  this.armor = armor || 0;
  this.ad = ad || 0;
}

var champion1 = new Champion(620, 76, 120);
var champion2 = new Champion(800, 76, 120);
```
para:
```batch
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
```
-----------------------------

```batch
function armorEfficiency(armor) {
  let efficiency;

  if (armor <= 100) {
    efficiency = armor / 2;
  } else {
    efficiency = 100 / 2;
    efficiency += armor / 33.33;
  }

  if (efficiency >= 90) {
    efficiency = 90;
  } else if (efficiency <= -20) {
    efficiency = -20;
  }

  var efficiencyPercentage = efficiency / 100;
  console.log("Eficiência da armadura:", efficiencyPercentage);
  return efficiencyPercentage;
}
```
Essa função armorEfficiency recebe um parâmetro armor que representa o valor da armadura. Ela calcula a eficiência da armadura com base nesse valor. Se armor for menor ou igual a 100, a eficiência é calculada como metade do valor da armadura. Caso contrário, a eficiência é calculada como metade de 100 adicionado ao valor da armadura dividido por 33.33. A eficiência é então verificada para garantir que esteja dentro dos limites de 90 e -20. O valor da eficiência é armazenado em efficiencyPercentage como uma porcentagem dividida por 100. A eficiência é exibida no console e também retornada pela função.

# Veja também: [mrEfficiency](https://github.com/obrientatsuya/Eden-Engine/blob/main/mrEfficiency.md)


```batch
function actionHit(origin, target) {
  var originAd = origin.ad;
  console.log(`Champion 1 hit Champion 2 com ${originAd} de ad`);

  console.log(`Champion 2 tem ${champion2.armor} de armor`);

  var targetArmorEfficiency = armorEfficiency(target.armor);

  var dmgWithReduction = +(originAd - (originAd * targetArmorEfficiency)).toFixed(2);

  console.log(`${originAd} - (${originAd} * ${targetArmorEfficiency}) = ${dmgWithReduction}`);

  console.log(`${target.hp} - ${dmgWithReduction}`);

  target.hp -= dmgWithReduction;

  console.log(`Champion 2 hp após o hit: ${target.hp}`);
}
```
Essa função actionHit recebe dois parâmetros: origin e target, que são objetos de personagem. A função calcula o dano causado pelo campeão de origem (origin) ao campeão alvo (target).

A linha var originAd = origin.ad; armazena o valor do atributo ad do campeão de origem em uma variável chamada originAd.

Em seguida, são exibidas mensagens no console para informar qual campeão está atacando e qual a quantidade de dano de ataque que está sendo usada.

A linha var targetArmorEfficiency = armorEfficiency(target.armor); chama a função armorEfficiency para calcular a eficiência da armadura do campeão alvo. O valor da armadura do campeão alvo é passado como argumento para a função.

A linha var dmgWithReduction = +(originAd - (originAd * targetArmorEfficiency)).toFixed(2); calcula o dano com base no valor de ataque do campeão de origem e na eficiência da armadura do campeão alvo. O valor é subtraído do valor original de ataque (originAd) multiplicado pela eficiência da armadura (targetArmorEfficiency). O método toFixed(2) é aplicado para limitar o resultado a duas casas decimais e o operador + é usado para converter o resultado de volta em um número.

A próxima linha exibe a expressão completa da fórmula de cálculo de dano no console, mostrando os valores de originAd, originAd * targetArmorEfficiency e dmgWithReduction.

A linha console.log(${target.hp} - ${dmgWithReduction}); exibe no console a expressão que representa a subtração do valor de dano do alvo dos pontos de vida atuais do campeão alvo.

A linha target.hp -= dmgWithReduction; subtrai o valor do dano reduzido dos pontos de vida do campeão alvo, atualizando o valor dos pontos de vida.

```batch
actionHit(champion1, champion2);
```
Essa linha chama a função actionHit com os objetos de campeões champion1 como campeão de origem e champion2 como campeão alvo. Isso simula um ataque do champion1 ao champion2.

# Veja também: [Exp Mechanic](https://github.com/obrientatsuya/Eden-Engine/blob/main/experience.js)
