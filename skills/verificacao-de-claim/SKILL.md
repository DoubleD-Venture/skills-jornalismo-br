---
name: verificacao-de-claim
description: Extrai alegações verificáveis de um texto, separa o que é fato checável do que é opinião ou previsão, e devolve cada alegação com veredito, evidência e ClaimReview pronto para publicar. Use quando pedirem para checar um texto, um discurso, um post ou uma entrevista.
license: MIT
doubled:
  titulo: Verificação de claim
  categoria: fact-check
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: typedit
  resumo: Separa alegação de opinião, verifica cada uma e devolve ClaimReview pronto para publicar.
  saida:
    - ClaimReview (schema.org)
    - Tabela de alegações com veredito
  fontes: []
---

# Verificação de claim

## Quando usar

Quando chega um texto para checar e o primeiro trabalho é decidir **o que** dá
para checar. A maior parte do erro de fact-check não está no veredito: está em
tratar como alegação de fato algo que era previsão, opinião ou juízo de valor.

## O que esta skill não faz

Ela não decide o veredito sozinha e não tem acesso a fonte nenhuma por conta
própria. Ela estrutura o trabalho e obriga a evidência a existir antes do
veredito. Se você não trouxer fonte, o veredito fica em `Não verificado` — e
isso é o comportamento correto, não uma falha.

## Procedimento

### 1. Extrair as alegações

Leia o texto e liste toda afirmação que possa ser verdadeira ou falsa **em
princípio**. Para cada uma, registre a frase exata, sem parafrasear: a
paráfrase é onde o fact-check perde a defesa quando é contestado.

Classifique cada trecho em uma destas quatro:

| Tipo | Checável? | Exemplo |
| --- | --- | --- |
| Fato | sim | "o desemprego caiu 2 pontos em 2025" |
| Previsão | não, mas registre | "o desemprego vai cair em 2027" |
| Opinião ou juízo | não | "foi a pior gestão da história" |
| Ambíguo | reformule antes | "muita gente perdeu emprego" |

Para o ambíguo, escreva a versão checável ao lado e **diga que você reformulou**.
Nunca substitua silenciosamente a frase original.

### 2. Priorizar

Nem toda alegação merece o mesmo esforço. Ordene por:

1. quanto a alegação sustenta a tese central do texto
2. quão fácil é verificar com fonte primária
3. quanto dano causa se for falsa e circular sem checagem

Cheque de cima para baixo e pare quando o custo passar do valor. Diga na saída
quais alegações ficaram sem checar, e por quê.

### 3. Verificar

Para cada alegação priorizada:

- vá à **fonte primária**, não à notícia que a cita. Se a alegação é sobre um
  dado público, a fonte é a base, não a reportagem sobre a base
- registre a data do dado, não só a data da publicação. Muito "erro" de
  checagem é dado certo de ano errado
- confira o recorte: total ou percentual, nominal ou real, série revisada ou
  original, Brasil ou região
- se a fonte é secundária, diga isso explicitamente na evidência

### 4. Dar o veredito

Use uma escala pequena e declarada. Escala grande dá sensação de precisão que
a evidência não sustenta.

| Veredito | Quando |
| --- | --- |
| Verdadeiro | a alegação confere com a fonte primária, no recorte que ela mesma propõe |
| Impreciso | o número existe mas o recorte, a data ou a comparação distorce |
| Falso | a fonte primária contradiz a alegação |
| Insustentável | não existe fonte que sustente, e o ônus era de quem afirmou |
| Não verificado | não foi possível checar com o esforço disponível |

`Não verificado` é um veredito legítimo e deve aparecer na publicação. Omitir a
alegação que você não conseguiu checar é pior do que declarar que não checou.

### 5. Escrever a evidência antes da conclusão

Para cada alegação, escreva nesta ordem: o que a fonte diz → o que a alegação
diz → onde as duas divergem → veredito. Escrever o veredito primeiro e a
evidência depois é como se produz o fact-check que confirma o que já se
achava.

## Formato de saída

Uma tabela para leitura humana:

| # | Alegação (verbatim) | Tipo | Veredito | Fonte | Data do dado |
| --- | --- | --- | --- | --- | --- |

E, para cada alegação de fato checada, um bloco `ClaimReview` do schema.org,
que é o formato que o Google e os buscadores generativos leem:

```json
{
  "@context": "https://schema.org",
  "@type": "ClaimReview",
  "datePublished": "2026-08-28",
  "url": "https://exemplo.com.br/checagem/slug#claim-1",
  "claimReviewed": "a frase exata, verbatim",
  "itemReviewed": {
    "@type": "Claim",
    "author": { "@type": "Person", "name": "quem afirmou" },
    "datePublished": "2026-08-20",
    "appearance": { "@type": "CreativeWork", "url": "onde foi dito" }
  },
  "author": { "@type": "Organization", "name": "nome do veículo" },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": 1,
    "bestRating": 5,
    "worstRating": 1,
    "alternateName": "Falso"
  }
}
```

Três erros comuns neste bloco, e todos derrubam a validação:

- `claimReviewed` parafraseado. Tem que ser a frase como foi dita.
- `ratingValue` sem `bestRating` e `worstRating`. A escala precisa ser
  declarada, senão o número não significa nada.
- `url` apontando para a home da checagem em vez do trecho específico. Use
  âncora por alegação quando a página checa mais de uma.

## Antes de entregar

- [ ] Toda alegação classificada, inclusive as que não foram checadas
- [ ] Nenhuma frase parafraseada em `claimReviewed`
- [ ] Data do dado registrada, além da data da publicação
- [ ] Fonte primária, ou aviso explícito de que é secundária
- [ ] Escala do veredito declarada na página

