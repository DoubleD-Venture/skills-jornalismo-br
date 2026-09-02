---
name: dados-do-ibge
description: Apura estatística oficial brasileira do IBGE (PNAD, IPCA, Censo, PIB), escolhendo a série certa, respeitando margem de erro e evitando comparação indevida entre períodos e metodologias. Use em pauta com número de desemprego, inflação, renda ou população.
license: MIT
doubled:
  titulo: Estatística oficial (IBGE)
  categoria: dados
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: doubled
  resumo: A série certa, o recorte certo e a ressalva certa em dado de desemprego, inflação e renda.
  serp: 'Skill para usar dado do IBGE sem escorregar: escolhe a série certa, deflaciona quando precisa e declara a margem de erro em desemprego, inflação e renda.'
  saida:
    - Série apurada com fonte e data
    - Parágrafo de metodologia
  fontes:
    - SIDRA / IBGE
    - API de dados do IBGE
---

# Estatística oficial (IBGE)

## Quando usar

Sempre que a matéria tiver número de desemprego, inflação, renda, população ou
PIB. Também quando alguém citar um desses números e for preciso conferir.

## O erro mais comum do jornalismo com dado do IBGE

Não é errar a conta. É **comparar coisas que não são comparáveis**: trimestre
com trimestre anterior numa série sazonal, série revisada com série antiga,
recorte nacional com estadual, ou usar variação de um mês como se fosse
tendência.

## Procedimento

### 1. Definir a pergunta antes da série

Escreva a pergunta em uma frase. "O desemprego subiu?" não é pergunta
suficiente: subiu em relação a quando, em que recorte, e por qual medida?

### 2. Escolher a série certa

| Pergunta | Onde olhar | Cuidado |
| --- | --- | --- |
| Desemprego, ocupação, renda do trabalho | PNAD Contínua | trimestral móvel; comparar com igual trimestre do ano anterior |
| Inflação ao consumidor | IPCA | índice cheio × núcleos × grupos |
| Custo de vida de faixa baixa | INPC | população-alvo diferente do IPCA |
| População, domicílio, território | Censo e projeções | ano do Censo × estimativa intercensitária |
| Atividade econômica | Contas Nacionais | série encadeada, sujeita a revisão |

Confirme a série e o período direto na fonte do IBGE. Tabela do SIDRA tem
número e recorte próprios, e a mesma variável aparece em tabelas diferentes
com agregações diferentes.

### 3. Registrar a extração

- tabela ou série consultada
- período exato
- data da consulta
- se a série é ajustada sazonalmente ou não

Dado do IBGE é **revisado**. Sem data de consulta, o número da matéria não
reproduz, e alguém vai tentar reproduzir.

### 4. As armadilhas, uma a uma

**Comparação sazonal.** Desemprego cai todo fim de ano e sobe no começo. Comparar
com o trimestre anterior mede a estação, não a economia. Compare com o mesmo
período do ano anterior, ou use série com ajuste sazonal e diga que usou.

**Margem de erro.** PNAD é pesquisa amostral. Variação pequena entre dois
períodos pode não ser estatisticamente distinguível de zero. Antes de escrever
"subiu", verifique se a diferença é maior que o intervalo de confiança. Em
recorte pequeno, como um estado ou um grupo específico, a margem cresce
muito.

**Recorte pequeno demais.** Quanto menor o grupo, maior o erro amostral. Dado
por município na PNAD frequentemente não existe, e quando existe pode não ser
publicável.

**Quebra de metodologia.** Séries mudam de metodologia. Comparar antes e depois
da mudança sem dizer é erro grave. O IBGE sinaliza a quebra; leia as notas.

**Nominal versus real.** Renda em real corrente de anos diferentes não se
compara. Deflacione, diga qual índice usou e qual a data-base.

**Índice cheio versus grupo.** "A inflação dos alimentos foi X" é grupo, não o
IPCA. Dizer "a inflação foi X" citando um grupo é erro de manchete comum.

**Variação mensal como tendência.** Um mês é um mês. Para tendência, use
acumulado em 12 meses, ou média móvel, e diga qual usou.

### 5. Escrever o parágrafo de metodologia

Toda matéria com número precisa de um, e ele é curto:

> Os dados são da [pesquisa], do IBGE, referentes a [período], consultados em
> [data]. A comparação é com [período de referência]. [Ressalva relevante:
> margem de erro, ajuste sazonal, deflação.]

Se o parágrafo não couber, o número provavelmente não deveria estar na matéria
daquele jeito.

## Conferência

- reproduza o número na fonte antes de publicar
- confira se a variação citada é a mesma base que você usou
- se alguém citou o número, cheque se citou a mesma série

## Formato de saída

```
PERGUNTA
[uma frase]

SÉRIE
pesquisa · tabela · variável · recorte · período · ajuste sazonal

EXTRAÇÃO
data da consulta · versão da série

RESULTADO
[tabela]

RESSALVAS
- comparação usada: [...]
- margem de erro: [...]
- deflação: [índice e data-base, ou "valores nominais"]
- quebras de série no período: [...]

PARÁGRAFO DE METODOLOGIA
[pronto para colar na matéria]
```

