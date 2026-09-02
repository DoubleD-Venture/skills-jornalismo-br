---
name: pedido-lai
description: Escreve pedido de acesso à informação pela Lei 12.527/2011, escolhe o órgão certo, controla prazo e monta o recurso quando a resposta é negada ou incompleta. Use quando faltar documento público para uma apuração no Brasil.
license: MIT
doubled:
  titulo: Pedido de acesso à informação (LAI)
  categoria: apuracao
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: doubled
  resumo: Redige o pedido, escolhe o órgão, controla o prazo e monta o recurso na negativa.
  serp: 'Skill que redige pedido de acesso à informação pela Lei 12.527, escolhe o órgão certo, controla o prazo legal e monta o recurso quando a resposta é negada.'
  saida:
    - Texto do pedido
    - Cronograma de prazos
    - Minuta de recurso
  fontes:
    - Lei 12.527/2011
    - Fala.BR (Poder Executivo federal)
    - Portais de transparência estaduais e municipais
---

# Pedido de acesso à informação (LAI)

## Quando usar

Quando a apuração depende de documento que o poder público tem e não publicou.
A LAI é ferramenta de rotina, não último recurso: pedido protocolado cedo
rende documento no meio da apuração, e não depois do fechamento.

## O que decide o sucesso do pedido

Não é a redação bonita. É, nesta ordem:

1. **pedir ao órgão certo** — pedido no órgão errado é negado por
   incompetência e queima 20 dias
2. **pedir documento, não explicação** — "quero o contrato nº X" funciona;
   "quero saber por que gastaram tanto" não
3. **ser específico o bastante para não caber recusa por generalidade**, e
   genérico o bastante para não permitir entrega parcial literal

## Procedimento

### 1. Identificar o órgão e a esfera

Antes de escrever, responda: quem produz ou custodia esse documento?

- **Executivo federal**: use o Fala.BR
- **Estados e municípios**: cada um tem seu sistema; muitos usam plataforma
  própria. Confirme o canal oficial no portal de transparência do ente
- **Legislativo, Judiciário, Ministério Público, tribunais de contas**: têm
  ouvidoria e sistema próprios, e regulamento próprio de prazo
- **Estatais e empresas públicas**: sujeitas à LAI, com regras específicas
  para informação comercial sensível

> Confirme o canal e o regulamento do ente antes de protocolar. Estados e
> municípios editam decretos próprios de regulamentação, e o rito local pode
> divergir do federal em detalhe que decide o recurso.

### 2. Escrever o pedido

Estrutura que funciona:

```
Solicito, com base na Lei 12.527/2011, cópia digital de:

1. [documento específico, com número, período e órgão]
2. [documento específico, com número, período e órgão]

Em caso de indisponibilidade de qualquer item, solicito:
(a) a indicação do dispositivo legal que fundamenta a negativa;
(b) a informação sobre qual órgão detém o documento, se não for este.

Solicito o envio em formato digital aberto e pesquisável, preferencialmente
CSV ou planilha para dados tabulares, conforme o art. 8º, §3º, da Lei
12.527/2011.
```

Regras de redação:

- **um pedido por assunto.** Pedido com dez temas é negado inteiro por causa
  de um. Protocolos separados falham separadamente
- **peça o documento, não o dado processado.** Órgão não é obrigado a produzir
  análise nova, mas é obrigado a entregar o que já existe
- **não explique por que quer.** A lei dispensa motivação, e explicar abre
  espaço para o órgão discutir o motivo em vez do documento
- **peça formato aberto.** Receber PDF de imagem de uma planilha é negativa
  disfarçada de deferimento

### 3. Controlar o prazo

Marque no calendário no dia do protocolo:

| Marco | Prazo | O que fazer |
| --- | --- | --- |
| Resposta | 20 dias | se passar sem resposta, já cabe recurso por omissão |
| Prorrogação | +10 dias | só vale com justificativa expressa; anote a justificativa |
| Recurso | 10 dias da ciência | contra negativa, entrega parcial ou silêncio |

A negativa por silêncio é recorrível como qualquer outra. Não espere
"educadamente" além do prazo: o relógio do recurso é seu.

### 4. Ler a resposta com desconfiança técnica

Deferimento não é entrega. Confira:

- **veio tudo?** Compare item a item com o que foi pedido
- **veio no formato pedido?** PDF de imagem quando se pediu CSV é entrega
  parcial, e é recorrível
- **veio com tarja?** Tarja precisa de fundamento legal expresso e de prazo de
  sigilo. Tarja sem fundamento é negativa não fundamentada
- **a negativa cita a lei?** Negativa genérica, sem dispositivo, é o recurso
  mais fácil que existe

### 5. Recorrer

O recurso não repete o pedido: ele ataca o **fundamento** da negativa.

```
Recorro da decisão que [negou / atendeu parcialmente] o pedido nº [X].

A negativa fundamenta-se em [dispositivo citado pelo órgão]. Esse fundamento
não se aplica porque [razão específica].

Requeiro a reforma da decisão e a entrega de [item], no formato [X].
```

Instâncias, no Executivo federal: autoridade hierarquicamente superior à que
negou → autoridade máxima do órgão → Controladoria-Geral da União → Comissão
Mista de Reavaliação de Informações. Em outros poderes e entes, a cadeia
muda; confirme no regulamento local.

## Formato de saída

1. **O texto do pedido**, pronto para colar no sistema
2. **A escolha do órgão**, com a justificativa em uma linha
3. **O cronograma**, com as três datas já calculadas a partir do protocolo
4. **A minuta de recurso**, deixada pronta para o caso de negativa

## Antes de protocolar

- [ ] Órgão confirmado como detentor do documento
- [ ] Um assunto por protocolo
- [ ] Documento pedido pelo nome ou número, com período
- [ ] Formato aberto solicitado, com base no art. 8º, §3º
- [ ] Nenhuma justificativa de motivo no texto
- [ ] Datas de resposta, prorrogação e recurso no calendário

