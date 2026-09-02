---
name: verificacao-de-imagem
description: Verifica se uma imagem ou vídeo é o que dizem que é. Checa proveniência por Content Credentials (C2PA), busca reversa, análise de contexto e sinais de síntese. Use antes de publicar mídia de origem incerta ou ao checar conteúdo viral.
license: MIT
doubled:
  titulo: Verificação de imagem e vídeo
  categoria: fact-check
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: doubled
  resumo: Proveniência, busca reversa e contexto para decidir se a mídia sustenta publicação.
  serp: 'Skill para decidir se uma imagem ou vídeo sustenta publicação: proveniência C2PA, busca reversa e leitura de contexto, com o limite de cada uma anotado.'
  saida:
    - Ficha de proveniência
    - Veredito com nível de confiança
  fontes:
    - Content Credentials (C2PA)
---

# Verificação de imagem e vídeo

## Quando usar

Antes de publicar mídia que não foi produzida pela redação, e sempre que
conteúdo visual viraliza.

## A pergunta certa

Quase nunca é "isto é falso?". É **"isto é o que dizem que é?"**. A esmagadora
maioria da desinformação visual usa imagem autêntica com legenda errada:
foto real de outro ano, outro país, outro evento. Procurar sinal de montagem
numa imagem que nunca foi montada é gastar tempo no lugar errado.

Comece sempre pelo contexto, não pelos pixels.

## Procedimento

### 1. Proveniência declarada (C2PA)

Verifique se a mídia carrega Content Credentials. Câmeras, celulares e
ferramentas de edição e de geração vêm assinando origem e histórico de edição.

- verifique em um validador de Content Credentials
- se houver credencial: leia quem assinou, quando, e o histórico de edições
- se **não** houver: isso não é sinal de falsidade. A maior parte do conteúdo
  legítimo ainda não é assinada

**Limite que precisa ser dito:** o metadado quebra com screenshot, recompressão
e reupload em rede social. Ausência de credencial é quase sempre inconclusiva.
Presença de credencial válida é evidência forte; ausência não é evidência de
nada.

### 2. Busca reversa

Procure a mídia em mais de um buscador de imagem. Para vídeo, extraia
quadros-chave e busque cada um.

O que você quer descobrir, nesta ordem:

1. **a aparição mais antiga.** Se a imagem existe desde 2019, ela não é do
   evento de ontem
2. **o contexto original.** Legenda da primeira publicação conhecida
3. **as variações.** Recortes diferentes revelam o que foi cortado, e o que
   foi cortado costuma ser a informação

### 3. Ler a imagem

Antes de qualquer análise técnica, leia o que está visível:

- placa, letreiro, idioma, alfabeto
- clima, estação, vegetação, se batem com a data alegada
- sombra e posição do sol contra a hora alegada
- uniforme, viatura, sinalização de trânsito, tomada elétrica, lado da direção
- arquitetura e paisagem

Muita checagem termina aqui: a placa está em outro idioma, ou é verão numa
imagem que seria de julho no Sul.

### 4. Localizar

Se o lugar importa, confirme por marcos visíveis contra imagens de rua e
satélite. Registre os pontos que casaram, não só a conclusão.

### 5. Suspeita de síntese

Só depois de tudo acima, e sempre como **indício**, nunca como prova:

- mãos, dentes, orelhas e óculos com geometria inconsistente
- texto em placa e letreiro que não forma palavra
- reflexo e sombra que não concordam entre si
- em vídeo: piscar irregular, borda do rosto instável, sincronia labial
- áudio com respiração ausente e entonação plana demais

**Detector automático de IA não é evidência publicável.** As taxas de erro são
altas nos dois sentidos e mudam a cada geração de modelo. Use como pista para
investigar mais, jamais como veredito. Publicar "detector apontou 92% de
chance de IA" é transformar incerteza em número, e é o tipo de erro que
destrói a credibilidade de quem checa.

### 6. Fechar

O veredito é sobre a **alegação**, não sobre a imagem:

| Veredito | Significado |
| --- | --- |
| Confere | é o que dizem que é, no contexto alegado |
| Fora de contexto | mídia autêntica, alegação errada |
| Alterada | há edição que muda o sentido |
| Sintética | gerada, com evidência que sustente |
| Inconclusivo | não foi possível determinar |

`Inconclusivo` é resultado legítimo e frequente. Declarar "provavelmente IA"
sem evidência é o mesmo erro da desinformação, com sinal trocado.

## Formato de saída

```
ALEGAÇÃO
[o que dizem que a mídia mostra]

PROVENIÊNCIA
Content Credentials: [presente / ausente / quebrado]
Assinante e data: [...]

BUSCA REVERSA
Aparição mais antiga: [data e URL]
Contexto original: [...]

LEITURA DA IMAGEM
[elementos visíveis que confirmam ou contradizem]

LOCALIZAÇÃO
[pontos que casaram]

INDÍCIOS DE SÍNTESE
[o que foi observado, marcado como indício]

VEREDITO: [...]  CONFIANÇA: [alta / média / baixa]
O QUE FALTARIA PARA SUBIR A CONFIANÇA: [...]
```

O último campo é obrigatório. Ele impede que "baixa confiança" vire "não deu"
e transforma a checagem inconclusiva em próxima pauta.

