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
module.exports = Champion;