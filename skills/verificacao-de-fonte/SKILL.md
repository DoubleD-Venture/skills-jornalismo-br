---
name: verificacao-de-fonte
description: Avalia se uma fonte merece confiança antes de citá-la, usando o método SIFT. Investiga quem publicou, procura cobertura melhor e rastreia a alegação até o contexto original. Use antes de citar site, estudo, relatório ou post desconhecido.
license: MIT
doubled:
  titulo: Verificação de fonte
  categoria: fact-check
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: doubled
  resumo: Aplica o SIFT para decidir se uma fonte sustenta citação, antes de ela entrar na matéria.
  serp: 'Skill que aplica o método SIFT para decidir se uma fonte sustenta citação, antes de ela entrar na matéria. Para apuração e checagem em português do Brasil.'
  saida:
    - Ficha da fonte
    - Recomendação de uso
  fontes: []
---

# Verificação de fonte

## Quando usar

Antes de citar qualquer fonte que você não conhece. Vale para site, estudo,
relatório, dado solto, post viral e para o "levantamento" que chega por
assessoria.

## O método

SIFT, de Mike Caulfield. Quatro movimentos, e o primeiro é o que quase todo
mundo pula.

### S — Stop (pare)

Antes de ler, pare e responda: eu sei o que é isso? Se não sei, não leio ainda.
Ler primeiro e avaliar depois é como a desinformação entra: o texto já
construiu o enquadramento antes de você julgar a origem.

Pare de novo se o material provocou reação forte. Material feito para circular
é otimizado para indignação, e indignação encurta a checagem.

### I — Investigate (investigue a fonte)

Descubra **quem publicou**, e não o que a página diz sobre si mesma.

- quem mantém, quem financia, desde quando existe
- é veículo, instituto, empresa, ativismo, ou assessoria com nome de instituto?
- o autor tem histórico verificável na área?
- **leitura lateral**: abra outras abas e procure o que terceiros dizem sobre
  a fonte, em vez de ler o "Quem somos". Página institucional é peça de
  comunicação, não evidência

Sinais de alerta que valem mais que a aparência do site:

- sem expediente, sem endereço, sem responsável nomeado
- domínio recente para uma instituição que se diz antiga
- nome que imita veículo conhecido
- "estudo" sem metodologia, sem amostra e sem autor

### F — Find (procure cobertura melhor)

A pergunta não é "esta fonte é confiável?", e sim "**existe fonte melhor para
a mesma coisa?**". Quase sempre existe.

Se a alegação é relevante, procure quem mais a reportou. Se ninguém mais
reportou algo que seria notícia grande, isso é informação sobre a alegação.

### T — Trace (rastreie até a origem)

Siga a alegação até a fonte primária. O caminho típico da distorção:

```
dado original → release da instituição → agência → portal → post → print
```

Cada salto perde recorte, data e ressalva. Rastreie até o começo e compare o
que a ponta diz com o que a origem diz. É aqui que aparece a maior parte dos
"dados falsos" que na verdade são dados verdadeiros fora de contexto.

## Casos brasileiros que merecem atenção extra

- **"Instituto" e "observatório"**: no Brasil o nome não é protegido. Confira
  CNPJ, financiador e quem assina o estudo
- **Assessoria com formato de pesquisa**: material com aparência acadêmica
  produzido por empresa interessada no resultado
- **Print de rede social**: print não é fonte. Encontre o post original, veja
  se existe, se é da conta que dizem e se não foi editado ou apagado
- **Pesquisa eleitoral**: só vale a registrada, com número de registro,
  contratante e margem declarados

## Formato de saída

Ficha curta por fonte:

| Campo | |
| --- | --- |
| Fonte | nome e URL |
| Quem mantém | pessoa jurídica, financiador |
| Tipo | veículo, instituição, empresa, ativismo, anônimo |
| Fonte primária? | sim ou não; se não, qual é |
| Cobertura independente | quem mais reportou |
| Recomendação | citar / citar com ressalva / não citar |

E, se a recomendação for "citar com ressalva", **escreva a ressalva** já no
formato que vai para a matéria. Ressalva que fica na cabeça do repórter não
chega ao leitor.

## Antes de citar

- [ ] Sei quem publicou e quem financia
- [ ] Fiz leitura lateral, não só li a página "Quem somos"
- [ ] Cheguei à fonte primária, ou declarei que é secundária
- [ ] Procurei cobertura independente da mesma alegação
- [ ] A ressalva, se houver, está escrita para o leitor

