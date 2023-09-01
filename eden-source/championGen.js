function Champion(params) {
  this.baseStats = {
    name: params.name || '',
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
      tenacity: params.tenacity || 0,
      death: params.death || 0,
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
module.exports = Champion;