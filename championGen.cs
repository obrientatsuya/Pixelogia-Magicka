using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Champion
{
    public string name;
    public struct OffensiveStats
    {
        public float armorPen, ad, atqSpeed, criticalStrike, criticalDamage, lifesteal;
    }

    public struct DefensiveStats
    {
        public float armor, hp, mr, maxhp, tenacity, death;
    }

    public struct MagicStats
    {
        public float ap, cdr, mrPen, mana, magicVamp, maxmana;
    }

    public struct NivelingStats
    {
        public float exp, nvl;

        public struct RegenStats
        {
            public float value, start, end;
        }

        public RegenStats hpregen, manaregen, armorNvl, mrNvl, atksNvl, msNvl, apNvl, adNvl;
    }

    public struct Status
    {
        public float gold;

        public struct StunnedStats
        {
            public string type;
            public float timer;
        }

        public StunnedStats stunned;
    }

    public struct Items
    {
        public struct InventoryItems
        {
            public string slot1, slot2, slot3, slot4, slot5, slot6;
        }

        public InventoryItems inventory;
    }

    public struct Skill
    {
        public string name;

        public struct SkillAttributes
        {
            public string area, cost, cooldown;
        }

        public SkillAttributes attributes;
        public NivelingStats niveling;
    }

    public OffensiveStats offensive;
    public DefensiveStats defensive;
    public MagicStats magic;
    public NivelingStats niveling;
    public Status status;
    public Items items;
    public Skill skill1;

    public Champion() { }
}
