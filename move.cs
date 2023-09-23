using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovimentoMouse : MonoBehaviour
{
    public float velocidade = 5.0f; // Velocidade de movimento do objeto
    private Vector3 offset; // Offset para manter o anchor point na parte superior central do objeto

    public Vector3 destinoMouse; // Posição de destino do mouse
    public Vector3 direcao; // Direção de movimento após soltar o botão do mouse

    public bool seguindoMouse = false; // Variável para rastrear se estamos seguindo o mouse

    // public ParticleSystem dust;

    private void Start()
    {
        // Calcula o offset para manter o anchor point na parte superior central do objeto
        offset = new Vector3(0f, GetComponent<SpriteRenderer>().bounds.extents.y, 0f);
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(1)) // Botão direito ou esquerdo do mouse pressionado
        {
            // Obtém a posição atual do mouse na tela
            Vector3 posicaoMouse = Input.mousePosition;

            // Converte a posição do mouse de tela para o espaço do mundo
            destinoMouse = Camera.main.ScreenToWorldPoint(posicaoMouse);

            // Mantém a mesma posição Z do objeto
            destinoMouse.z = transform.position.z;

            seguindoMouse = true; // Começa a seguir o mouse

            // Reseta a direção para impedir o movimento após soltar o botão
            direcao = Vector3.zero;
        }

        if (Input.GetMouseButtonUp(1)) // Botão direito ou esquerdo do mouse solto
        {
            seguindoMouse = false; // Para de seguir o mouse

            // Calcula a direção de movimento após soltar o botão
            direcao = (destinoMouse - (transform.position - offset)).normalized;
        }

        if (seguindoMouse)
        {
            // Obtém a posição atual do mouse na tela
            Vector3 posicaoMouse = Input.mousePosition;

            // Converte a posição do mouse de tela para o espaço do mundo
            destinoMouse = Camera.main.ScreenToWorldPoint(posicaoMouse);

            // Mantém a mesma posição Z do objeto
            destinoMouse.z = transform.position.z;

            // Move o objeto em direção ao mouse
            transform.position = Vector3.MoveTowards(transform.position, destinoMouse + offset, velocidade * Time.fixedDeltaTime);

            // CreateDust();
        }

        if (!seguindoMouse && direcao != Vector3.zero)
        {
            // Continua movendo na direção após soltar o botão do mouse
            transform.position += direcao * velocidade * Time.fixedDeltaTime;

            // Verifica se chegou perto o suficiente da posição final
            if (Vector3.Distance(transform.position - offset, destinoMouse) < 0.05f)
            {
                direcao = Vector3.zero; // Para de mover quando estiver próximo o suficiente
            }
        }

        // void CreateDust() 
        // {
        //     dust.Play();
        // }
    }
}
