---
name: transcricao-de-entrevista
description: "Transforma transcrição bruta de entrevista em material de apuração: separa fala por interlocutor, marca tempo, extrai citações fiéis, lista o que ficou por confirmar e aponta as contradições. Use depois de gravar uma entrevista."
license: MIT
doubled:
  titulo: Transcrição de entrevista
  categoria: apuracao
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: typedit
  resumo: Da transcrição bruta ao material de apuração, com citações fiéis e o que ficou em aberto.
  saida:
    - Transcrição limpa com marcação de tempo
    - Citações candidatas
    - Lista de pendências
  fontes: []
---

# Transcrição de entrevista

## Quando usar

Depois da entrevista, com a transcrição bruta em mãos. O objetivo não é
"limpar o texto": é extrair o que a entrevista produziu de apurável.

## A regra que não se negocia

**Citação entre aspas é literal.** Ajuste de pontuação e remoção de vício de
oralidade são aceitáveis e devem ser declarados como política. Trocar palavra,
inverter ordem, juntar duas frases distantes ou cortar o meio sem reticências
não são.

Se o trecho só funciona reescrito, ele sai das aspas e vira paráfrase
atribuída. Paráfrase honesta é melhor que aspas maquiada.

## Procedimento

### 1. Estruturar

Separe por interlocutor e marque tempo a cada troca de assunto. A marcação de
tempo é o que permite voltar ao áudio quando a citação for contestada, e vai
ser.

```
[00:04:12] REPÓRTER: pergunta
[00:04:20] FONTE: resposta
```

Quando não der para identificar quem fala, marque `[inaudível]` ou
`[não identificado]`. Nunca atribua no chute: atribuição errada de fala é o
erro mais caro de uma entrevista.

### 2. Marcar o que o áudio não resolve

- `[inaudível]` para trecho que não dá para entender
- `[sic]` quando a fala tem erro que você vai manter
- `[?]` depois de nome próprio ou número que você ouviu mas não confirmou

O `[?]` é o mais importante dos três. Nome de pessoa, cargo, valor e data
ouvidos em áudio precisam ser confirmados por escrito antes de publicar.

### 3. Extrair citações candidatas

Para cada trecho que pode virar aspas na matéria, registre:

| Campo | |
| --- | --- |
| Citação | literal, com marcação de tempo |
| Contexto | a pergunta que provocou a resposta |
| Risco | o que muda se for lida fora de contexto |

O campo "contexto" é o que protege contra a acusação de descontextualização,
que é a mais comum quando a entrevista incomoda.

### 4. Listar o que ficou em aberto

Três listas separadas:

- **A confirmar**: nome, número, data e cargo ouvidos mas não verificados
- **Prometido**: documento ou dado que a fonte disse que enviaria
- **Não respondido**: a pergunta que foi feita e não teve resposta. Isto é
  informação, e frequentemente é a informação

### 5. Apontar contradições

Compare o que foi dito com o que a mesma fonte disse antes, se você tiver
material anterior, e com o que outras fontes disseram na mesma apuração.
Contradição não é acusação: é a próxima pergunta.

## Cuidados com dado pessoal

A transcrição bruta costuma conter mais do que a matéria: telefone dito em voz
alta, nome de terceiro não envolvido, endereço, informação de saúde.

- guarde a transcrição com o mesmo cuidado do áudio original
- se a fonte é protegida, o arquivo da transcrição não pode ter o nome dela no
  nome do arquivo nem nos metadados
- antes de compartilhar a transcrição com a equipe, remova o que não é da
  apuração

## Formato de saída

```
1. TRANSCRIÇÃO
   [tempo] INTERLOCUTOR: fala

2. CITAÇÕES CANDIDATAS
   | Citação | Tempo | Contexto | Risco |

3. A CONFIRMAR
   - [item] — ouvido em [tempo]

4. PROMETIDO PELA FONTE
   - [documento] — prometido em [tempo]

5. NÃO RESPONDIDO
   - [pergunta] — feita em [tempo]

6. CONTRADIÇÕES
   - [o que foi dito] × [o que contradiz]
```

## Antes de usar na matéria

- [ ] Toda aspa conferida contra o áudio, não contra a transcrição
- [ ] Todo `[?]` resolvido ou removido da matéria
- [ ] Contexto registrado para cada citação que vai ser usada
- [ ] Dado pessoal de terceiro fora da versão compartilhada
- [ ] Política de edição de fala declarada no veículo

