---
name: dados-eleitorais-tse
description: Apura dados eleitorais brasileiros com as bases do TSE — candidaturas, bens, prestação de contas, doadores e resultados — evitando as armadilhas metodológicas que produzem manchete errada. Use em pauta de eleição, financiamento de campanha ou patrimônio de candidato.
license: MIT
doubled:
  titulo: Dados eleitorais (TSE)
  categoria: dados
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: doubled
  resumo: Candidatura, bens, doadores e contas do TSE, com as armadilhas de recorte mapeadas.
  serp: 'Skill para candidatura, bens, doadores e prestação de contas no TSE, com as armadilhas de recorte e a consolidação por CPF do doador já mapeadas.'
  saida:
    - Tabela apurada com fonte e data de extração
    - Ressalvas metodológicas
  fontes:
    - Dados abertos do TSE
    - DivulgaCandContas
---

# Dados eleitorais (TSE)

## Quando usar

Pauta sobre candidato, campanha, financiamento, patrimônio declarado ou
resultado de urna.

## O que torna esses dados perigosos

Os dados do TSE são bons e completos. O erro quase nunca está no dado: está no
**recorte**. Comparar valores de eleições diferentes sem corrigir inflação,
somar doador sem consolidar CPF, ou usar base baixada antes do julgamento de
registros produz manchete errada com dado verdadeiro.

## Procedimento

### 1. Fixar o recorte antes de baixar

Escreva, antes: qual eleição (ano e turno), qual cargo, qual unidade
eleitoral, qual universo (todos os candidatos, os eleitos, os aptos). Recorte
decidido depois de ver o resultado é como se produz o dado que confirma a
tese.

### 2. Escolher a base certa

O TSE publica conjuntos separados, e misturá-los é a origem de boa parte do
erro:

| Pergunta | Conjunto |
| --- | --- |
| Quem se candidatou, com qual situação | candidaturas |
| O que declarou possuir | bens de candidatos |
| Quanto arrecadou e de quem | prestação de contas, receitas |
| Como gastou | prestação de contas, despesas |
| Quem foi eleito e com quantos votos | resultados |

Confirme no portal de dados abertos do TSE o conjunto e o layout do ano em
questão: o layout muda entre eleições, e coluna com o mesmo nome nem sempre
significa a mesma coisa.

### 3. Registrar a extração

Sempre, e no topo do material:

- data e hora do download
- ano da eleição e turno
- nome do arquivo e versão, se houver

Dado eleitoral é vivo: candidatura muda de situação, conta é julgada, valor é
retificado. Sem data de extração, o número não é reproduzível — e vai ser
questionado.

### 4. Armadilhas que geram erro de manchete

**Situação da candidatura.** "Candidato" não é uma coisa só: há deferido,
indeferido, com recurso, renúncia, falecimento, cassação. Contar todo mundo
como candidato infla o universo. Diga qual situação foi incluída.

**Nome versus CPF.** Nome de urna se repete; nome civil também. Consolide por
CPF ou CNPJ, nunca por nome. Doador contado duas vezes vira "maior doador"
inexistente.

**Doador originário versus intermediário.** Recurso que passa por partido ou
fundo tem origem diferente do repasse. Somar os dois conta o mesmo dinheiro
duas vezes.

**Valores entre eleições.** Real de 2020 não é real de 2026. Corrija por
índice, diga qual índice usou e qual a data-base. Sem isso, "gastou o dobro"
pode ser inflação.

**Bens declarados.** É declaração, a valor de aquisição, não avaliação de
mercado. "Patrimônio cresceu X%" compara duas declarações, e isso precisa
estar escrito na matéria.

**Prestação de contas.** Existe a entregue e existe a julgada. Conta pode ser
aprovada com ressalva, desaprovada ou ter recurso pendente. O status importa
mais que o valor.

**Votação por seção e por município.** Agregação diferente responde pergunta
diferente. Zona eleitoral não coincide com bairro nem com município.

### 5. Conferir antes de publicar

Pegue de três a cinco linhas do resultado e confira **uma a uma** contra a
consulta pública individual do candidato. Se o agregado não bate com o
individual, o erro é seu, e é melhor descobrir agora.

## Formato de saída

```
RECORTE
eleição · turno · cargo · UF/município · universo · situação incluída

EXTRAÇÃO
conjunto · data e hora · versão do layout

RESULTADO
[tabela]

RESSALVAS
- consolidação por CPF/CNPJ: [sim/não]
- correção monetária: [índice e data-base, ou "valores nominais"]
- status das contas: [entregue / julgada / com recurso]
- o que este recorte não responde: [...]

CONFERÊNCIA
- [n] linhas conferidas contra consulta individual
```

A seção de ressalvas não é rodapé: ela vira o parágrafo de metodologia da
matéria. Publicar número sem ela é o que transforma uma boa apuração em
correção na semana seguinte.

