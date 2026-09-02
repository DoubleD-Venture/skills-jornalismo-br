---
name: portais-de-transparencia
description: Apura gasto público em portais de transparência brasileiros, entendendo a diferença entre empenho, liquidação e pagamento, e cruzando fornecedor, contrato e nota fiscal. Use em pauta sobre gasto, contrato ou fornecedor de órgão público.
license: MIT
doubled:
  titulo: Portais de transparência
  categoria: dados
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: doubled
  resumo: Gasto público sem confundir empenho com pagamento, e com o fornecedor cruzado de verdade.
  serp: 'Skill para ler gasto público em portal de transparência sem confundir empenho, liquidação e pagamento, e cruzando o fornecedor pelo CNPJ de verdade.'
  saida:
    - Tabela de execução por etapa
    - Ficha do fornecedor
  fontes:
    - Portal da Transparência federal
    - Portais estaduais e municipais
---

# Portais de transparência

## Quando usar

Pauta sobre quanto um órgão gastou, com quem, e se o gasto tem contrato por
trás.

## O erro que decide a matéria

Confundir **empenho, liquidação e pagamento**. São três etapas diferentes, e
publicar uma no lugar da outra produz manchete errada com dado oficial.

| Etapa | O que significa | O que não significa |
| --- | --- | --- |
| Empenho | o órgão reservou o dinheiro | que houve serviço ou entrega |
| Liquidação | a entrega foi conferida e aceita | que o dinheiro saiu |
| Pagamento | o dinheiro saiu | que era o valor total do contrato |

"Órgão gastou R$ 10 milhões" citando empenho é errado quando o pagamento foi
de R$ 2 milhões. Diga sempre **qual etapa** o número representa. Isso vale um
parágrafo na matéria, não uma nota de rodapé.

## Procedimento

### 1. Fixar o recorte

Órgão, período, e a etapa da execução. Escreva antes de consultar.

Atenção ao **exercício financeiro**: gasto de dezembro pago em janeiro aparece
em ano diferente conforme a etapa. Restos a pagar são de exercícios
anteriores e distorcem o total do ano se somados sem aviso.

### 2. Escolher o portal certo

- **federal**: Portal da Transparência do governo federal
- **estados e municípios**: portal próprio, com estrutura e qualidade muito
  variáveis. Alguns têm API, outros só HTML paginado, outros só PDF
- **tribunais de contas**: costumam ter base própria, às vezes melhor que a do
  ente fiscalizado
- **compras**: sistemas de compras públicas trazem a licitação que originou o
  contrato

Quando o portal municipal for pobre, o caminho costuma ser o pedido de LAI
pedindo a base em formato aberto.

### 3. Puxar o fio do fornecedor

Recebido o gasto, o trabalho começa:

- **CNPJ, não nome.** Razão social muda; CNPJ não
- **data de abertura** contra o valor e a data do contrato. Empresa criada
  pouco antes de ganhar contrato grande é achado
- **atividade econômica** contra o objeto. Fornecedor de material de
  construção prestando serviço de TI merece pergunta
- **endereço**. Endereço residencial, ou compartilhado com outros
  fornecedores do mesmo órgão, é achado clássico
- **sócios**. Cruze com outros fornecedores do mesmo órgão e com servidores
- **concentração**. Quanto do faturamento do fornecedor vem de um só órgão? E
  quanto do gasto do órgão vai para um só fornecedor?

### 4. Ligar gasto a contrato

Pagamento sem contrato correspondente é achado, mas quase sempre é falha de
publicação, não irregularidade. Verifique antes de afirmar: peça por LAI o
processo administrativo.

Para cada gasto relevante, monte a cadeia:

```
processo → licitação ou dispensa → contrato → aditivos → empenhos →
liquidações → pagamentos
```

Elo faltando vira pedido de LAI, não vira acusação.

### 5. Comparar com cuidado

- entre anos: corrija a inflação e diga o índice
- entre municípios: normalize por população ou por orçamento, nunca em valor
  absoluto
- entre órgãos: confira se a estrutura de despesa é comparável

## Antes de publicar

- [ ] Etapa da execução declarada na matéria
- [ ] Restos a pagar separados do exercício
- [ ] Fornecedor identificado por CNPJ
- [ ] Cadeia contrato–pagamento montada, com buracos declarados
- [ ] Órgão e fornecedor procurados para manifestação
- [ ] Valores corrigidos, com índice declarado

## Formato de saída

```
RECORTE
órgão · período · etapa · exercício · restos a pagar incluídos [sim/não]

EXECUÇÃO
| Fornecedor | CNPJ | Empenhado | Liquidado | Pago | Contrato |

FICHA DO FORNECEDOR
CNPJ · abertura · atividade · sócios · concentração no órgão

CADEIA
[o que foi encontrado] → [elo faltando] → [LAI sugerida]

ACHADOS
1. [o que o dado mostra, sem adjetivo] — o que falta para afirmar
```

A coluna "o que falta para afirmar" é o que separa apuração de acusação. Ela
tem que estar preenchida em todo achado.

