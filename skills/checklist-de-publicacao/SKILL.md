---
name: checklist-de-publicacao
description: "Roda a checagem final antes de publicar: LGPD, dado pessoal de terceiro, direito de resposta, identificação de fonte, uso declarado de IA e correção posterior. Use imediatamente antes de publicar qualquer matéria."
license: MIT
doubled:
  titulo: Checklist de publicação
  categoria: etica
  versao: 1.0.0
  atualizado: "2026-08-28"
  autor: typedit
  resumo: "A última passada antes de publicar: LGPD, direito de resposta, fonte protegida e IA declarada."
  saida:
    - Relatório de bloqueios e ressalvas
  fontes:
    - Lei 13.709/2018 (LGPD)
---

# Checklist de publicação

## Quando usar

Depois de fechada, antes de publicar. É a passada que separa o problema barato
do problema caro: quase tudo aqui custa cinco minutos antes e custa muito
depois.

## Como usar

Percorra os seis blocos. Cada item tem três estados: **ok**, **ressalva** ou
**bloqueio**. Bloqueio não publica.

---

## 1. Dado pessoal e LGPD

A LGPD tem hipótese específica para jornalismo, mas ela não é um passe livre:
protege o **tratamento com finalidade jornalística**, e não tudo que sai num
site de notícias.

- [ ] Todo dado pessoal no texto tem função jornalística? Nome, idade,
      endereço e profissão só entram se fizerem falta à informação
- [ ] **Endereço completo, CPF, RG, placa, telefone e e-mail** de particular
      estão fora? Se algum é indispensável, o motivo está registrado
- [ ] Há dado sensível (saúde, religião, orientação sexual, filiação
      partidária ou sindical, biometria)? Se sim, o interesse público está
      escrito, não presumido
- [ ] Há criança ou adolescente identificável? Nome, escola, rosto e o
      conjunto de detalhes que permite identificar
- [ ] O texto reproduz vazamento com dado pessoal de terceiro não envolvido?

> Bloqueio: dado sensível ou de menor sem justificativa escrita.

## 2. Acusação e direito de resposta

- [ ] Toda pessoa ou empresa acusada de algo foi procurada?
- [ ] O pedido de manifestação está registrado, com data, canal e prazo dado?
- [ ] Se não houve resposta, o texto diz isso, com o prazo concedido?
- [ ] A resposta, quando veio, está no texto com espaço proporcional à
      acusação, e não no último parágrafo?
- [ ] O texto separa o que é acusação de terceiro do que é apuração própria?

> Bloqueio: acusação nominal sem tentativa registrada de contato.

## 3. Fonte

- [ ] Fonte em off está protegida no texto **e** nos arquivos? Print, metadado
      de documento, nome de arquivo e histórico de versão vazam identidade
- [ ] O acordo de anonimato está registrado: o que foi combinado, com quem e
      quando?
- [ ] Uma fonte anônima sustenta sozinha alguma afirmação central? Se sim, há
      documento ou segunda fonte?
- [ ] Documento recebido foi conferido quanto a metadado que identifique quem
      entregou?

> Bloqueio: risco de identificação de fonte protegida.

## 4. Imagem e arquivo

- [ ] Há autorização ou base para usar cada imagem?
- [ ] Imagem de arquivo está datada e identificada como arquivo?
- [ ] Imagem gerada ou alterada por IA está declarada como tal, na legenda?
- [ ] Rosto de terceiro não envolvido aparece de forma identificável?
- [ ] Crédito e licença de cada imagem estão corretos?

## 5. Uso de IA

- [ ] Se houve uso de IA generativa em qualquer parte do processo, isso está
      declarado conforme a política do veículo?
- [ ] Nenhum trecho gerado entrou sem revisão humana?
- [ ] Nenhuma citação, número ou fonte veio de modelo sem verificação na
      origem? Modelo inventa citação com aparência perfeita
- [ ] Imagem sintética está identificada?

> Bloqueio: citação ou dado que não foi conferido em fonte primária.

## 6. Correção e permanência

- [ ] A matéria tem data e hora de publicação visíveis?
- [ ] Existe política de correção declarada e um caminho para o leitor apontar
      erro?
- [ ] Se corrige matéria anterior, a correção está sinalizada na própria
      matéria antiga, e não só na nova?
- [ ] Alguma informação vai envelhecer mal e precisa de data explícita no
      corpo, e não só no carimbo?

---

## Formato de saída

```
BLOQUEIOS (não publicar até resolver)
- [item] — [o que fazer]

RESSALVAS (publicar sabendo)
- [item] — [risco assumido]

OK
- [contagem por bloco]
```

Liste bloqueio antes de ressalva, sempre. Relatório que começa pelos acertos
faz o leitor parar antes do problema.

## Limite desta skill

Isto é checagem editorial, não parecer jurídico. Em caso de dúvida real sobre
dado sensível, menor de idade ou risco de identificação de fonte, a decisão é
do editor com apoio jurídico, e não de uma lista.

