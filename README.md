# Getting Started
The setup of project has in releases.

### Actual view. [NOT IN REALTIME]
<img src="/Unity_63rYLTO9lX.gif">

### Old view [BEFORE UPDATE]
<img src="/preview gif.gif">

### Action Hit [0 crit]
```javascript
O HP do Champion 2 é: 800
Champion 1 hit Champion 2 com 120 de ad
Champion 2 tem 76 de armor
Eficiência da armadura: 0.38
120 - (120 * 0.38) = 74.4
800 - 74.4
Champion 2 hp após o hit: 725.6
```
### Action Hit [100 crit]
```javascript
Acerto Crítico!
O HP do Champion 2 é: 1000
Champion 1 hit Champion 2 com 962.50 de dano crítico
Champion 2 tem 250 de armor
Dano Total: 404.25
Champion 2 hp após o hit: 595.75
```

# Start
```javascript
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
      mr: params.mr || 0,
      maxhp: params.maxhp || 0,
      tenacity: params.tenacity || 0
    },
    magic: {
      ap: params.ap || 0,
      cdr: params.cdr || 0,
      mrPen: params.mrPen || 0,
      mana: params.mana || 0,
      magicVamp: params.magicVamp || 0
    },
    niveling: {
      exp: params.exp || 0,
      nvl: params.nvl || 0,
            
            hpregen: {
              value: params.hpregen || 0,
              start: params.hpregenStart || 0,
              end: params.hpregenEnd || 0
            },
            manaregen: {
              value: params.manaregen || 0,
              start: params.manaregenStart || 0,
              end: params.manaregenEnd || 0
            },
            armorNvl: {
              value: params.armorNvl || 0,
              start: params.armorNvlStart || 0,
              end: params.armorNvlEnd || 0
            },
            mrNvl: {
              value: params.mrNvl || 0,
              start: params.mrNvlStart || 0,
              end: params.mrNvlEnd || 0
            },
            atksNvl: {
              value: params.atksNvl || 0,
              start: params.atksNvlStart || 0,
              end: params.atksNvlEnd || 0
            },
            msNvl: {
              value: params.msNvl || 0,
              start: params.msNvlStart || 0,
              end: params.msNvlEnd || 0
            },
            apNvl: {
              value: params.apNvl || 0,
              start: params.apNvlStart || 0,
              end: params.apNvlEnd || 0
            },
            adNvl: {
              value: params.adNvl || 0,
              start: params.adNvlStart || 0,
              end: params.adNvlEnd || 0
            }
    }
  };
  this.status = {

     gold: params.gold,

    death: {
      live: params.live || 0,
    },
    stunned: {
      type: params.type || '',
      timer: params.timer || 0,
    }
  };

  this.items = {
    inventory: {
      slot1: params.slot1 || '',
      slot2: params.slot2 || '',
      slot3: params.slot3 || '',
      slot4: params.slot4 || '',
      slot5: params.slot5 || '',
      slot6: params.slot6 || '',

    }
  }
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

```


1. A função `Champion` é definida e recebe um parâmetro chamado `params`. Essa função é usada para criar instâncias de campeões em um jogo.

3. A propriedade `baseStats` é criada dentro do objeto `this`. Essa propriedade contém estatísticas básicas do campeão, divididas em categorias ofensivas, defensivas, mágicas e de nivelamento.
# Ofensive
6-14. Dentro da categoria `offensive` (ofensiva), são definidos os atributos relacionados ao poder de ataque do campeão. Esses atributos incluem `armorPen` (penetração de armadura), `ad` (dano de ataque), `atqSpeed` (velocidade de ataque), `criticalStrike` (chance de acerto crítico), `criticalDamage` (dano crítico) e `lifesteal` (roubo de vida).
# Defensive
17-26. Dentro da categoria `defensive` (defensiva), são definidos os atributos relacionados à resistência e durabilidade do campeão. Esses atributos incluem `armor` (armadura), `hp` (pontos de vida), `hpregen` (regeneração de pontos de vida), `mr` (resistência mágica) e `maxhp` (máximo de pontos de vida). A propriedade `hpregen` é um objeto que contém três sub-atributos: `value` (valor de regeneração), `start` (momento de início da regeneração) e `end` (momento de término da regeneração). 
# Magic
29-38. Dentro da categoria `magic` (mágica), são definidos os atributos relacionados ao poder mágico do campeão. Esses atributos incluem `ap` (poder de habilidade), `cdr` (redução de recarga), `mrPen` (penetração de resistência mágica), `mana` (mana), `manaregen` (regeneração de mana) e `magicVamp` (vampirismo mágico). A propriedade `manaregen` é um objeto que contém três sub-atributos: `value` (valor de regeneração), `start` (momento de início da regeneração) e `end` (momento de término da regeneração). 
# Scaling
41-44. Dentro da categoria `niveling` (ou scaling), são definidos os atributos relacionados ao nível e experiência do campeão. Esses atributos incluem `exp` (experiência) e `nvl` (nível).
# Skills Stats
47. A propriedade `skills` é criada dentro do objeto `this`. Essa propriedade contém informações sobre as habilidades do campeão.
49-54. Dentro da habilidade `skill1`, são definidos os atributos relacionados à primeira habilidade do campeão. Esses atributos incluem `name` (nome da habilidade), `attributes` (atributos da habilidade, como área de efeito, custo e tempo de recarga) e `niveling` (atributos de nivelamento da habilidade). 
-----------------------------

# Armor Efficiency e Mr Efficiency [Agora estão juntas em defenseEfficiency]
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

# Função responsável pelo hit basico. [Atualizada]
```javascript
function actionHit(origin, target) {
  var critDmg = criticalStrike(origin);
  var targetArmorEfficiency = armorEfficiency(target.baseStats.defensive.armor);
  
  if (critDmg > 0) {
    console.log('Acerto Crítico!');
    console.log(`Champion 1 hit Champion 2 com ${critDmg} de dano crítico`);
    console.log(`Champion 2 tem ${target.baseStats.defensive.armor} de armor`);
    
    var dmgWithReduction = critDmg - (critDmg * targetArmorEfficiency).toFixed(2);
    
    console.log(`Dano Total: ${dmgWithReduction}`);
    target.baseStats.defensive.hp -= dmgWithReduction;
    console.log(`Champion 2 hp após o hit: ${target.baseStats.defensive.hp}`)

  } else {
    var originAd = origin.baseStats.offensive.ad;
    console.log(`Champion 1 hit Champion 2 com ${originAd} de ad`);
    console.log(`Champion 2 tem ${target.baseStats.defensive.armor} de armor`);
    var dmgWithReduction = +(origin.baseStats.offensive.ad - (origin.baseStats.offensive.ad * targetArmorEfficiency)).toFixed(2);
    console.log(`Dano Total: ${dmgWithReduction}`);
    console.log(`${target.baseStats.defensive.hp} - ${dmgWithReduction}`);
    target.baseStats.defensive.hp -= dmgWithReduction;
    console.log(`Champion 2 hp após o hit: ${target.baseStats.defensive.hp}`);

  }
}

```

```javascript
actionHit(champion1, champion2);
```
Chama a função `actionHit` passando `champion1` como origem e `champion2` como alvo, simulando um ataque do `champion1` ao `champion2`.

# Experience and Hp Regen [Desatualizada]
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
```

# New shop feature

### Input:
```javascript
shop(champion1, 1)
shop(champion1, 2);
shop(champion1, 3)
shop(champion1, 1)
shop(champion1, 2);
shop(champion1, 3)
shop(champion1, 4)
sell(champion1, 1)
```

### Output:

```javascript
...
Item "Bota" comprado com sucesso. Ouro restante: 900
Preço original do item: 100
Preço atualizado do item: 100
Slots atualizados do inventário:
{
  slot1: { id: 1, name: 'Bota', price: 100, recipe: null, sellPrice: 50 },
  slot2: '',
  slot3: '',
  slot4: '',
  slot5: '',
  slot6: ''
}
...
Item "Armor" comprado com sucesso. Ouro restante: 800
Preço original do item: 100
Preço atualizado do item: 100
Slots atualizados do inventário:
{
  slot1: { id: 1, name: 'Bota', price: 100, recipe: null, sellPrice: 50 },
  slot2: { id: 2, name: 'Armor', price: 100, recipe: null, sellPrice: 50 },
  slot3: '',
  slot4: '',
  slot5: '',
  slot6: ''
}
...
Item "Tabi" comprado com sucesso. Ouro restante: 700
Preço original do item: 300
Preço atualizado do item: 100
Slots atualizados do inventário:
{
  slot1: '',
  slot2: '',
  slot3: { id: 3, name: 'Tabi', price: 300, recipe: [ 1, 2 ], sellPrice: 150 },
  slot4: '',
  slot5: '',
  slot6: ''
}
...
Item "Bota" comprado com sucesso. Ouro restante: 600
Preço original do item: 100
Preço atualizado do item: 100
Slots atualizados do inventário:
{
  slot1: { id: 1, name: 'Bota', price: 100, recipe: null, sellPrice: 50 },
  slot2: '',
  slot3: { id: 3, name: 'Tabi', price: 300, recipe: [ 1, 2 ], sellPrice: 150 },
  slot4: '',
  slot5: '',
  slot6: ''
}
...
Item "Armor" comprado com sucesso. Ouro restante: 500
Preço original do item: 100
Preço atualizado do item: 100
Slots atualizados do inventário:
{
  slot1: { id: 1, name: 'Bota', price: 100, recipe: null, sellPrice: 50 },
  slot2: { id: 2, name: 'Armor', price: 100, recipe: null, sellPrice: 50 },
  slot3: { id: 3, name: 'Tabi', price: 300, recipe: [ 1, 2 ], sellPrice: 150 },
  slot4: '',
  slot5: '',
  slot6: ''
}
...
Item "Tabi" comprado com sucesso. Ouro restante: 400
Preço original do item: 300
Preço atualizado do item: 100
Slots atualizados do inventário:
{
  slot1: '',
  slot2: '',
  slot3: { id: 3, name: 'Tabi', price: 300, recipe: [ 1, 2 ], sellPrice: 150 },
  slot4: { id: 3, name: 'Tabi', price: 300, recipe: [ 1, 2 ], sellPrice: 150 },
  slot5: '',
  slot6: ''
}
...
Item "Super Tabi" comprado com sucesso. Ouro restante: 400
Preço original do item: 600
Preço atualizado do item: 0
Slots atualizados do inventário:
{
  slot1: {
    id: 4,
    name: 'Super Tabi',
    price: 600,
    recipe: [ 3, 3 ],
    sellPrice: 300
  },
  slot2: '',
  slot3: '',
  slot4: '',
  slot5: '',
  slot6: ''
}
...
Item "Super Tabi" vendido com sucesso por 300 de ouro.
Ouro atual do campeão: 700
Slots atualizados do inventário:
{ slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '' }
...
```
