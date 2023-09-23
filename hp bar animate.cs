using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DualSliderController : MonoBehaviour
{
    public Slider mainSlider; // O Slider principal que diminuirá rapidamente
    public Slider delayedSlider; // O Slider com atraso
    public Image delayedSliderFill; // A imagem de preenchimento do Slider com atraso

    public float delay = 1.0f; // O tempo de atraso em segundos
    public float damageThreshold = 0.3f; // Limiar para o dano (30%)

    private float currentValue;
    private float targetValue;
    private float reductionRate;
    private bool isTakingDamage = false;
    public Color amarelo = new Color(0.95f, 0.72f, 0.07f);
    public Color amareloBranco = new Color(0.867f, 0.823f, 0.808f);
     // Cor personalizada no formato RGB

    private void Start()
    {
        // Define o valor máximo do delayedSlider igual ao do mainSlider
        UpdateDelayedSliderMaxValue();

        currentValue = mainSlider.value;
        targetValue = mainSlider.value;
        reductionRate = (mainSlider.maxValue - mainSlider.minValue) / delay;
    }

    private void Update()
    {
        // Verificar se o valor máximo do mainSlider mudou e atualizar o do delayedSlider
        if (mainSlider.maxValue != delayedSlider.maxValue)
        {
            UpdateDelayedSliderMaxValue();
        }

        // Verificar se o dano é maior ou igual a 30% do valor máximo do mainSlider
        float damagePercentage = Mathf.Abs(targetValue - mainSlider.value) / mainSlider.maxValue;

        if (damagePercentage >= damageThreshold)
        {
            isTakingDamage = true;
        }

        // Verificar se o Slider com atraso está tomando dano e a porcentagem está dentro do limiar
        if (isTakingDamage && delayedSlider.value != mainSlider.value)
        {
            // Mudança de cor para amareloBranco
            delayedSliderFill.color = amareloBranco;
        }
        else
        {
            // Manter a cor amarela
            delayedSliderFill.color = amarelo;
        }

        // Atualizar o valor do Slider com atraso
        if (currentValue != targetValue)
        {
            currentValue = Mathf.MoveTowards(currentValue, targetValue, reductionRate * Time.deltaTime);
            delayedSlider.value = currentValue;
        }

        // Verificar se o Slider com atraso alcançou o mesmo valor do Slider principal
        if (currentValue == mainSlider.value)
        {
            isTakingDamage = false;
        }

        // Atualizar o valor de destino com base no Slider principal
        targetValue = mainSlider.value;
    }

    // Função para atualizar o valor máximo do delayedSlider
    private void UpdateDelayedSliderMaxValue()
    {
        delayedSlider.maxValue = mainSlider.maxValue;
    }
}
