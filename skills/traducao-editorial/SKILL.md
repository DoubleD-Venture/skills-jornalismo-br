---
name: traducao-editorial
description: Traduz material jornalístico para o português do Brasil preservando citação literal, convertendo unidades e contexto, e sinalizando o que não se traduz sem nota. Use ao aproveitar material estrangeiro, despacho de agência ou estudo em outro idioma.
license: MIT
doubled:
  titulo: Tradução editorial
  categoria: redacao
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: typedit
  resumo: Tradução que preserva a citação, converte o contexto e avisa o que precisa de nota.
  saida:
    - Texto traduzido
    - Lista de decisões e notas necessárias
  fontes: []
---

# Tradução editorial

## Quando usar

Ao aproveitar reportagem, despacho de agência, estudo ou documento em outro
idioma para publicação em português do Brasil.

## A diferença entre traduzir e traduzir para publicar

Tradução automática resolve o sentido. O que ela não resolve, e é onde a
matéria erra:

- **citação** vira paráfrase e perde a literalidade
- **unidade e moeda** ficam sem referência para o leitor brasileiro
- **cargo e instituição** recebem equivalente aproximado que não existe aqui
- **contexto pressuposto** no original desaparece sem nota
- **termo técnico e jurídico** ganha tradução literal que significa outra coisa

## Procedimento

### 1. Citação: traduzir e preservar

Citação direta traduzida continua sendo citação, e o leitor precisa saber que
é tradução.

- traduza pelo sentido, não palavra a palavra
- **mantenha o original** ao lado quando a formulação exata importar: fala
  polêmica, termo jurídico, trecho que vai ser contestado
- sinalize a tradução na primeira ocorrência, conforme o manual do veículo
- se a fala tem ambiguidade no original, **não resolva a ambiguidade na
  tradução**. Traduza ambíguo e explique em nota

### 2. Números, unidades e moeda

- converta medidas para o sistema métrico
- **moeda**: mantenha o valor original e acrescente a conversão, com a data da
  cotação. Conversão sem data envelhece em uma semana
- datas para o formato brasileiro
- separador decimal e de milhar para a convenção pt-BR
- fuso horário quando a hora importa

### 3. Cargo, instituição e sistema

Aqui mora o erro mais frequente. Traduzir cargo pelo equivalente brasileiro
mais próximo cria falsa correspondência.

- **não force equivalência.** Instituição estrangeira raramente tem
  correspondente exato no Brasil
- mantenha o nome original e explique a função em aposto, na primeira menção
- órgão, tribunal e sistema eleitoral estrangeiros funcionam de forma
  diferente; explique o que o leitor precisa para entender a notícia, e só
  isso
- sigla estrangeira: escreva por extenso na primeira menção, com a sigla
  original

### 4. Contexto pressuposto

O texto original foi escrito para quem já sabe algo. Identifique o que o leitor
brasileiro não sabe e decida: nota, aposto, ou parágrafo de contexto.

Não traduza pressuposto como se fosse informação. Se o original diz "depois do
escândalo", o leitor daqui pode não saber qual.

### 5. O que não se traduz

- nome próprio, salvo uso consagrado
- nome de lei e de programa: mantenha o original com tradução explicativa
- expressão idiomática sem equivalente: reescreva pelo sentido, sem tentar
  achar provérbio brasileiro que muda o registro
- trocadilho: perde. Diga que perdeu, se importar

### 6. Créditos e direitos

- material de agência ou de veículo parceiro tem regra de crédito e de
  reprodução. Confirme antes
- tradução de trecho longo pode exigir autorização, não só crédito
- link para o original quando o acordo permitir

## Formato de saída

```
TEXTO TRADUZIDO
[...]

DECISÕES DE TRADUÇÃO
| Original | Escolha | Por quê |

CONVERSÕES
| Original | Convertido | Data da cotação (quando moeda) |

NOTAS NECESSÁRIAS
- [contexto que o leitor brasileiro não tem]

NÃO TRADUZIDO
- [termo] — motivo

CRÉDITO
[como deve ser creditado]
```

A tabela de decisões existe para o editor discordar. Tradução publicada sem
registro do que foi decidido é tradução que ninguém consegue revisar.

## Antes de publicar

- [ ] Toda citação direta conferida contra o original
- [ ] Original preservado onde a formulação importa
- [ ] Moeda com data de cotação
- [ ] Nenhum cargo ou instituição com equivalência forçada
- [ ] Notas de contexto escritas
- [ ] Crédito e permissão de reprodução conferidos

