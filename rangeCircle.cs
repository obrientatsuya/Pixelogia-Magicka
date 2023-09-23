using UnityEngine;

public class CirculoIsometricoVistoDeCima : MonoBehaviour
{
    public int raioDoCirculoEmPixels = 100;
    public Color corDoCirculo = new Color(1f, 1f, 1f, 0.3f); // Cor do círculo com baixa opacidade

    private GameObject circuloObj;
    private bool mostrarCirculo = false;

    void Start()
    {
        CriarCirculo();
    }

    void Update()
     {
        // Alternar o estado do círculo quando a tecla de espaço é pressionada
        if (Input.GetKeyDown(KeyCode.Space))
        {
            mostrarCirculo = !mostrarCirculo; // Inverter o estado atual
            circuloObj.SetActive(mostrarCirculo); // Ativar ou desativar o GameObject do círculo com base no estado
        }

        // Esconder o círculo quando ocorre um clique com o botão esquerdo ou direito do mouse
        if (Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1))
        {
            mostrarCirculo = false;
            circuloObj.SetActive(false);
        }
    }

    void CriarCirculo()
    {
        circuloObj = new GameObject("Circulo");
        circuloObj.transform.parent = transform;

        // Calcule a posição centralizada na parte inferior (25%) do sprite do objeto
        SpriteRenderer spriteRenderer = GetComponent<SpriteRenderer>();
        if (spriteRenderer != null)
        {
            Vector3 spriteBounds = spriteRenderer.bounds.size;
            float yOffset = -(spriteBounds.y * 0.25f); // 25% da parte inferior
            circuloObj.transform.localPosition = new Vector3(0f, yOffset, 0f);
        }

        // Adicione uma rotação em X ao GameObject do círculo
        circuloObj.transform.localRotation = Quaternion.Euler(50f, 0f, 0f);

        SpriteRenderer circuloSpriteRenderer = circuloObj.AddComponent<SpriteRenderer>();

        Texture2D texturaCirculo = new Texture2D(raioDoCirculoEmPixels * 2, raioDoCirculoEmPixels * 2);
        for (int x = 0; x < texturaCirculo.width; x++)
        {
            for (int y = 0; y < texturaCirculo.height; y++)
            {
                float distancia = Vector2.Distance(new Vector2(x, y), new Vector2(raioDoCirculoEmPixels, raioDoCirculoEmPixels));
                if (distancia <= raioDoCirculoEmPixels)
                {
                    texturaCirculo.SetPixel(x, y, corDoCirculo);
                }
                else
                {
                    texturaCirculo.SetPixel(x, y, Color.clear);
                }
            }
        }
        texturaCirculo.Apply();

        circuloSpriteRenderer.sprite = Sprite.Create(texturaCirculo, new Rect(0, 0, raioDoCirculoEmPixels * 2, raioDoCirculoEmPixels * 2), Vector2.one * 0.5f);

        // Ajuste a ordem de classificação conforme necessário
        circuloSpriteRenderer.sortingOrder = 2;

        // Ajuste a escala para a perspectiva isométrica
        circuloObj.transform.localScale = new Vector3(1.414f, 1.414f, 1f); // Fator de escala para uma projeção isométrica 2:1

        // Desative o círculo inicialmente
        circuloObj.SetActive(false);
    }
}
