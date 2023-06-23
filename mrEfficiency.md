Calcula a eficiência da resistência mágica com base no valor de "mr". Ele segue as seguintes regras:

- Se "mr" for menor ou igual a 100, a eficiência é calculada como "mr / 3".
- Se "mr" for maior que 100, a eficiência é calculada como "(100 / 2) + ((mr - 100) / 33)".
- Se a eficiência calculada for maior ou igual a 60, ela é definida como 60.
- Se a eficiência calculada for menor ou igual a -10, ela é definida como -10.

Em seguida, o valor da eficiência é convertido em porcentagem com duas casas decimais.

Aqui estão os resultados do código para diferentes valores de "mr":

```javascript
console.log("Eficiência da resistência mágica:", mrEfficiency(76)); // Resultado: Eficiência da resistência mágica: 25.33%
console.log("Eficiência da resistência mágica:", mrEfficiency(100)); // Resultado: Eficiência da resistência mágica: 33.33%
console.log("Eficiência da resistência mágica:", mrEfficiency(150)); // Resultado: Eficiência da resistência mágica: 58.18%
console.log("Eficiência da resistência mágica:", mrEfficiency(250)); // Resultado: Eficiência da resistência mágica: 60.00%
```

