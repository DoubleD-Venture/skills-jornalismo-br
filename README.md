# Skills de jornalismo em pt-BR

Biblioteca aberta de **skills de apuração, checagem e redação em português do
Brasil**, no padrão `SKILL.md`. Funcionam no Claude Code, no Claude.ai, no
Codex, no Cursor e em qualquer agente que leia o formato.

12 skills · licença MIT · sem cadastro

## Por que existe

Os catálogos de skills que existem hoje são enormes e rasos, agregados
automaticamente do GitHub, e escritos em inglês para um contexto que não é o
nosso. Skill de "public records request" não ajuda quem precisa protocolar um
pedido de LAI; skill de checagem eleitoral americana não conhece a base do TSE.

Estas foram escritas para as fontes brasileiras, com as armadilhas
metodológicas de cada uma anotadas — a diferença entre empenho, liquidação e
pagamento; a sazonalidade que faz o desemprego cair todo fim de ano; a
consolidação por CPF que impede um doador de virar dois.

## O catálogo

| Skill | O que faz |
| --- | --- |
| `verificacao-de-claim` | Separa alegação de opinião, verifica e devolve ClaimReview |
| `verificacao-de-fonte` | Aplica o SIFT antes de a fonte entrar na matéria |
| `verificacao-de-imagem` | Proveniência (C2PA), busca reversa e leitura de contexto |
| `pedido-lai` | Redige o pedido, escolhe o órgão, controla prazo e monta o recurso |
| `transcricao-de-entrevista` | Da transcrição bruta ao material de apuração |
| `diario-oficial` | Do ato publicado à pauta, com os buracos virando LAI |
| `dados-eleitorais-tse` | Candidatura, bens, doadores e contas, sem erro de recorte |
| `dados-do-ibge` | A série certa, com margem de erro e deflação declaradas |
| `portais-de-transparencia` | Gasto público sem confundir empenho com pagamento |
| `titulo-e-linha-fina` | Título dentro do manual do veículo, sem prometer demais |
| `traducao-editorial` | Tradução que preserva a citação e converte o contexto |
| `checklist-de-publicacao` | A última passada: LGPD, direito de resposta, IA declarada |

Cada uma tem procedimento, formato de saída e uma seção sobre **o que ela não
faz** — porque skill que promete decidir sozinha é skill que erra sozinha.

## Instalar

```bash
# Claude Code — a biblioteca inteira
/plugin marketplace add DoubleD-Venture/skills-jornalismo-br

# Uma skill avulsa, em qualquer agente
mkdir -p .claude/skills/pedido-lai
curl -o .claude/skills/pedido-lai/SKILL.md \
  https://raw.githubusercontent.com/DoubleD-Venture/skills-jornalismo-br/main/skills/pedido-lai/SKILL.md

# Ou clone e revise antes
git clone https://github.com/DoubleD-Venture/skills-jornalismo-br
```

Catálogo navegável em **[doubledventure.com/skills](https://doubledventure.com/skills)**.

## Antes de instalar qualquer skill

Skill é instrução que um agente executa **com as suas permissões**. Auditorias
de catálogos públicos em 2026 encontraram média de vários achados de segurança
por skill — de `curl | sh` a instrução escondida em comentário HTML e
caractere Unicode de largura zero.

As daqui não executam comando, não pedem credencial e não fazem requisição de
rede. São texto, e `npm run check` testa exatamente isso a cada mudança. Mas a
regra vale para qualquer biblioteca, inclusive esta: **leia o arquivo antes de
instalar.** São poucas páginas.

## Contribuir

```bash
npm install
npm run check    # valida o catálogo inteiro
```

Para adicionar uma skill, crie `skills/<slug>/SKILL.md` e rode o `check`. Ele
confere o frontmatter, o vocabulário obrigatório e os padrões de risco.

### Formato

`SKILL.md` com frontmatter YAML. `name` e `description` são do padrão aberto
da Anthropic; o resto vive sob a chave `doubled`, **aninhado de propósito**:
nenhum agente lê essa chave, então o arquivo continua válido em qualquer
ferramenta.

```yaml
---
name: pedido-lai            # igual ao nome da pasta
description: ...            # é isto que o agente lê para decidir se ativa
license: MIT
doubled:
  titulo: ...
  categoria: apuracao       # fact-check | apuracao | dados | redacao | etica
  versao: 1.0.0
  atualizado: "2026-08-28"  # entre aspas, senão o YAML lê como data
  autor: doubled
  resumo: ...            # a linha do card na listagem
  serp: '...'            # 140 a 158 caracteres, ver abaixo
  saida: [...]
  fontes: [...]
---
```

#### Três textos, três leitores

Parece redundante até se ver quem lê cada um:

| Campo | Quem lê | Tamanho |
| --- | --- | --- |
| `description` | o agente, para decidir se ativa a skill | até 500 |
| `resumo` | quem passa o olho na listagem | ~80 a 100 |
| `serp` | quem vê a página no resultado de busca | 140 a 158 |

Nenhum serve no lugar do outro: o do agente passa de 200 caracteres e o do
card não chega a 100. Fora da faixa de 140 a 158, o buscador ou descarta a
description e escreve a dele, ou corta no meio da frase — e as duas coisas
acontecem sem aparecer nada de errado na página. O `check` mede.

> **Aspas importam.** Valor com dois-pontos seguido de espaço
> (`publicar: LGPD`) é YAML inválido sem aspas. O `check` pega isso com
> mensagem clara, em vez de quebrar três camadas adiante.

## Ressalva honesta

Estas skills foram escritas com cuidado para não afirmar o que não se sabe, e
para mandar o agente verificar em vez de chutar. Ainda assim: **prazo legal
muda, base pública muda de layout e manual de redação é de cada casa.** Trate
cada uma como procedimento a revisar, não como verdade congelada.

Se você trabalha em redação e encontrar imprecisão, abra uma issue. É o tipo
de correção que vale mais que qualquer coisa que a gente escreva sozinho.

## Licença

MIT. Veja [LICENSE](LICENSE).

Mantido pela [DoubleD Venture](https://doubledventure.com).
