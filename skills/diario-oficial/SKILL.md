---
name: diario-oficial
description: Lê Diário Oficial e ato administrativo brasileiro, identifica o tipo de ato, extrai as partes, valores e prazos, e aponta o que merece apuração. Use ao receber publicação do DOU, diário estadual ou municipal.
license: MIT
doubled:
  titulo: Leitura de Diário Oficial
  categoria: apuracao
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: typedit
  resumo: "Do ato publicado à pauta: tipo, partes, valores, prazos e o que merece apuração."
  saida:
    - Ficha do ato
    - Linha do tempo processual
    - Pautas derivadas
  fontes:
    - Diário Oficial da União
    - Diários oficiais estaduais e municipais
---

# Leitura de Diário Oficial

## Quando usar

Ao receber um ato publicado e precisar saber, rápido, o que ele é, quem ganha,
quanto custa e o que ainda vai acontecer.

## O erro que esta skill evita

Ler o Diário Oficial como texto corrido. Ato administrativo tem gramática
própria: o tipo do ato determina o que ele pode e não pode fazer, e metade da
pauta está no que **falta** no ato, não no que está escrito.

## Procedimento

### 1. Classificar o ato

Antes de ler o conteúdo, identifique o tipo. Cada um responde a uma pergunta
diferente:

| Tipo | O que é | O que perguntar |
| --- | --- | --- |
| Extrato de contrato | resumo do que foi assinado | qual licitação originou? |
| Aviso de licitação | abertura de disputa | prazo é razoável para o objeto? |
| Dispensa ou inexigibilidade | compra sem disputa | qual o fundamento legal? |
| Termo aditivo | mudança em contrato vigente | muda prazo, valor ou objeto? |
| Ata de registro de preços | preço registrado para compras futuras | quem mais pode aderir? |
| Nomeação ou exoneração | pessoal | cargo comissionado? qual vínculo? |
| Portaria, decreto, resolução | ato normativo | o que muda na prática, e quando? |
| Apostilamento | correção formal | corrige o quê? |

### 2. Extrair o esqueleto

Sempre os mesmos campos, mesmo quando algum falta. **Campo faltando é achado.**

- número e data do ato
- órgão emissor e autoridade que assina
- objeto, na palavra do ato
- partes, com CNPJ quando houver
- valor total, e se é global ou unitário
- vigência: início, fim, e se é prorrogável
- fundamento legal citado
- número do processo administrativo
- se decorre de licitação: modalidade e número

### 3. Ler o que o ato não diz

É aqui que a pauta aparece:

- **dispensa ou inexigibilidade sem fundamento claro.** O ato precisa dizer o
  dispositivo. Fundamento genérico é achado
- **aditivo que só mexe no valor.** Aditivo sucessivo de valor sem mudança de
  objeto merece a soma: quanto o contrato cresceu desde a assinatura?
- **prazo curto demais entre aviso e abertura** para o tamanho do objeto
- **objeto vago.** "Prestação de serviços técnicos especializados" sem
  detalhamento é o objeto que cabe qualquer coisa
- **valor redondo demais**, ou repetido em contratos diferentes
- **fornecedor recém-criado** para o porte do contrato. Data de abertura do
  CNPJ contra o valor contratado

### 4. Encadear

Um ato quase nunca é a história. A história é a sequência:

```
processo → licitação → contrato → aditivos → pagamentos
```

Monte a linha do tempo com o que tiver e marque os buracos. Para cada buraco,
já escreva o pedido de LAI correspondente — é o uso mais produtivo do Diário
Oficial.

### 5. Converter em pauta

Para cada achado, escreva:

- o que o documento mostra, sem adjetivo
- o que ainda não se sabe
- qual documento resolveria
- quem precisa ser procurado para responder

## Cuidados

- **Publicação não é prova de execução.** Contrato publicado pode não ter
  sido executado; empenho não é pagamento
- **Republicação e retificação** mudam o ato. Confira se houve republicação
  antes de basear a matéria na primeira versão
- **Nome de pessoa física** em ato de pessoal é público, mas o resto da vida
  dela não. Vale o checklist de publicação
- **CNPJ e valores** devem ser conferidos na fonte, não no OCR. Diário
  digitalizado erra dígito, e dígito errado vira erro de matéria

## Formato de saída

```
FICHA DO ATO
tipo · número · data · órgão · objeto · partes · valor · vigência ·
fundamento · processo

LINHA DO TEMPO
[data] evento — fonte

BURACOS
- [o que falta] → pedido de LAI sugerido

PAUTAS
1. [achado] — o que se sabe / o que falta / quem procurar
```

