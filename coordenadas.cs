using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AtualizarCoordenadas : MonoBehaviour
{
    public Text coordenadasText; // Referência ao Text UI Legacy
    public Transform objetoParaRastrear; // Objeto cujas coordenadas serão rastreadas

    // Atualize as coordenadas do objeto neste método
    private void Update()
    {
        if (objetoParaRastrear != null)
        {
            // Obtenha as coordenadas x e y do objeto e formate com duas casas decimais
            float x = Mathf.Round(objetoParaRastrear.position.x * 100f) / 100f;
            float y = Mathf.Round(objetoParaRastrear.position.y * 100f) / 100f;

            // Use interpolação de string para incorporar x e y na string do texto
            coordenadasText.text = $"y: {y:F2}, x: {x:F2}";
        }
    }
}
