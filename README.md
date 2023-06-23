# Eden-Engine

### Output:
```javascript
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

```javascript
function Champion(hp, armor, ad) {
  this.hp = hp || 0;
  this.armor = armor || 0;
  this.ad = ad || 0;
}

var champion1 = new Champion(620, 76, 120);
var champion2 = new Champion(800, 76, 120);
```
para:
```javascript
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
```javascript
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
A função `armorEfficiency` recebe um valor de `armor` e calcula a eficiência da armadura com base nesse valor. Se o valor de `armor` for menor ou igual a 100, a eficiência é calculada como `armor / 2`. Caso contrário, a eficiência é calculada somando 100/2 com `armor / 33.33`. Em seguida, há verificações para limitar a eficiência dentro de um intervalo de -20 a 90. O resultado é dividido por 100 para obter a eficiência em forma de porcentagem e é exibido no console. Por fim, o valor da eficiência é retornado.

# Veja também: [mrEfficiency](https://github.com/obrientatsuya/Eden-Engine/blob/main/mrEfficiency.md)

```javascript
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
A função `actionHit` recebe dois parâmetros: `origin` e `target`, que representam os campeões envolvidos na ação de ataque. A função realiza o cálculo de dano com base nos atributos dos campeões e exibe informações relevantes no console.

- `originAd` armazena o valor do atributo `ad` do campeão de origem.
- É exibida no console uma mensagem inform

ando o campeão de origem e seu valor de `ad`.
- É exibida no console a quantidade de armadura (`armor`) do `target` (campeão alvo).
- `targetArmorEfficiency` recebe o valor da eficiência da armadura do `target`, obtido chamando a função `armorEfficiency` passando o valor de `armor` do `target` como argumento.
- `dmgWithReduction` calcula o dano reduzido aplicando a eficiência da armadura ao `originAd`. O resultado é arredondado para 2 casas decimais.
- São exibidas no console as etapas do cálculo de dano.
- O valor do dano reduzido é subtraído do atributo `hp` do `target`.
- É exibido no console o valor atualizado do atributo `hp` do `target`.

```javascript
actionHit(champion1, champion2);
```
Chama a função `actionHit` passando `champion1` como origem e `champion2` como alvo, simulando um ataque do `champion1` ao `champion2`.

# Veja também: [Experience and Hp Regen](https://github.com/obrientatsuya/Eden-Engine/blob/main/experience.md)
### Output:
```javascript
Novo XP: 180
HP Regen Atual: 5.5
Nível: 1
HP increased from 620 to 625.5

Novo XP: 360
HP Regen Atual: 6.05
Nível: 2
HP increased from 625.5 to 631.55

Novo XP: 540
HP Regen Atual: 6.05
Nível: 2
HP increased from 631.55 to 637.6

Novo XP: 720
HP Regen Atual: 6.6
Nível: 3
HP increased from 637.6 to 644.2

Novo XP: 900
HP Regen Atual: 6.6

...
Novo XP: 18180  
HP Regen Atual: 14.3
Nível: 17
HP is already at maximum (800). No further healing.

Novo XP: 18360
HP Regen Atual: 14.85
Nível: 18
O campeão atingiu o nível máximo.
