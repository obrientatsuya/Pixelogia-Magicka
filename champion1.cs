using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class Alice : MonoBehaviour
{
    public Slider hpSlider;
    public Slider mnSlider;
    public Text hpText;
    public Text mnText;

    private Champion champion1;

    // Start is called before the first frame update
    void Start()
    {
        champion1 = new Champion
        {
                    name = "Alice",
                    offensive = new Champion.OffensiveStats
                    {
                        ad = 350,
                        criticalStrike = 100,
                    },
                    defensive = new Champion.DefensiveStats
                    {
                        hp = 500,
                        armor = 50,
                        maxhp = 1000,
                        death = 0,
                    },
                    magic = new Champion.MagicStats 
                    {
                        mana = 500,
                        maxmana = 500,
                    },
                    niveling = new Champion.NivelingStats
                    {
                        exp = 0,
                        nvl = 1,
                        hpregen = new Champion.NivelingStats.RegenStats
                        {
                            start = 5,
                            end = 15,
                        },
                        armorNvl = new Champion.NivelingStats.RegenStats
                        {
                            start = 5,
                            end = 15,
                        },
                    },
                    status = new Champion.Status
                    {
                        gold = 1000,
                    },
                };

        

        UpdateHealthSlider(); // Atualize o Slider com os valores iniciais.
    }

    // Update is called once per frame
    void Update()
    {
        // Verifique o input e atualize o HP com base nos botões pressionados.
        if (Input.GetKeyDown(KeyCode.A))
        {
            champion1.defensive.hp -= 500;
            UpdateHealthSlider();
        }
        else if (Input.GetKeyDown(KeyCode.F))
        {
            champion1.defensive.hp += 500;
             champion1.magic.mana -= 250;
            UpdateHealthSlider();
        }
        else if (Input.GetKeyDown(KeyCode.S))
        {
            champion1.defensive.hp -= 150;
            UpdateHealthSlider();
        };

        champion1.defensive.hp += 0.01f;
        champion1.magic.mana += 1f;
        UpdateHealthSlider();
    }

    // Função para atualizar o Slider com os valores de hp e maxhp.
    private void UpdateHealthSlider()
    {
        hpSlider.maxValue = champion1.defensive.maxhp;
        hpSlider.value = champion1.defensive.hp;
        mnSlider.maxValue = champion1.magic.maxmana;
        mnSlider.value = champion1.magic.mana;
        hpText.text = $"{hpSlider.value:F0}/{hpSlider.maxValue}";   
        mnText.text = $"{mnSlider.value:F0}/{mnSlider.maxValue}"; 
    }
}
