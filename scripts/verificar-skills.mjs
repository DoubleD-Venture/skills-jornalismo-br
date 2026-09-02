import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { load } from "js-yaml";

/*
  Verificador do catálogo. Roda com `npm run skills:check`.

  Existe porque este projeto já quebrou de um jeito feio: uma `description`
  com dois-pontos seguido de espaço, sem aspas, é YAML inválido — e o erro
  aparecia como falha de build do Next, três camadas longe da causa. Aqui a
  mensagem diz o arquivo, o campo e o motivo.

  Também confere o que o padrão SKILL.md exige e o que este catálogo exige
  além disso, para que uma skill nova não entre sem categoria, sem versão ou
  com slug diferente do `name`.
*/

/*
  A pasta é resolvida a partir da localização deste arquivo, e não do diretório
  de trabalho. O site consome esta biblioteca como submódulo e chama o
  verificador de fora — com caminho relativo ao cwd, ele procurava   na raiz do site e quebrava.
*/
const PASTA = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills');

const CATEGORIAS = ["fact-check", "apuracao", "dados", "redacao", "etica"];
const OBRIGATORIOS_TYPEDIT = [
  "titulo",
  "resumo",
  "categoria",
  "versao",
  "atualizado",
  "autor",
];

/* Limite da `description`: é ela que o agente lê para decidir se ativa a
   skill, e description longa demais desperdiça o orçamento de descoberta. */
const DESC_MAX = 500;

const erros = [];
const avisos = [];
const slugs = readdirSync(PASTA, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

for (const slug of slugs) {
  const caminho = join(PASTA, slug, "SKILL.md");
  const erro = (msg) => erros.push(`${slug}: ${msg}`);
  const aviso = (msg) => avisos.push(`${slug}: ${msg}`);

  if (!existsSync(caminho)) {
    erro("não tem SKILL.md");
    continue;
  }

  const bruto = readFileSync(caminho, "utf8");
  const m = bruto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) {
    erro("SKILL.md sem frontmatter delimitado por ---");
    continue;
  }

  let fm;
  try {
    fm = load(m[1]) ?? {};
  } catch (e) {
    erro(
      `frontmatter não é YAML válido (${e.message.split("\n")[0]}). ` +
        "Causa comum: valor com dois-pontos e espaço sem aspas.",
    );
    continue;
  }

  // Campos do padrão aberto
  if (typeof fm.name !== "string" || !fm.name.trim()) erro("falta `name`");
  else if (fm.name !== slug)
    erro(`\`name\` é "${fm.name}" mas a pasta é "${slug}"; devem ser iguais`);

  if (typeof fm.description !== "string" || !fm.description.trim()) {
    erro("falta `description`");
  } else {
    if (fm.description.length > DESC_MAX)
      aviso(`description com ${fm.description.length} caracteres (máx ${DESC_MAX})`);
    if (!/\bUse\b/i.test(fm.description))
      aviso("description sem indicação de quando usar (\"Use quando...\")");
  }

  // Campos deste catálogo
  const t = fm.doubled ?? {};
  for (const campo of OBRIGATORIOS_TYPEDIT) {
    if (!t[campo]) erro(`falta \`doubled.${campo}\``);
  }
  if (t.categoria && !CATEGORIAS.includes(t.categoria))
    erro(`categoria "${t.categoria}" não existe (use: ${CATEGORIAS.join(", ")})`);
  if (t.atualizado && !/^\d{4}-\d{2}-\d{2}$/.test(String(t.atualizado)))
    erro("`doubled.atualizado` deve ser AAAA-MM-DD entre aspas");

  const corpo = bruto.slice(m[0].length);

  /*
    Segurança. Este catálogo promete que as skills não executam comando, não
    pedem credencial e não escondem instrução. A promessa vira teste.
  */
  if (/curl[^\n]*\|\s*(ba)?sh/i.test(corpo))
    erro("contém `curl | sh`, que é execução remota de código");
  if (/<!--/.test(corpo))
    erro("contém comentário HTML, onde instrução costuma ser escondida");
  if (/[​-‍﻿⁠]/.test(bruto))
    erro("contém caractere Unicode de largura zero");
  if (/\b(senha|password|api[_ -]?key|token de acesso)\b/i.test(corpo))
    aviso("menciona credencial; confirme que não está pedindo uma");

  if (corpo.split("\n").length < 40)
    aviso(`corpo com ${corpo.split("\n").length} linhas; é raso para uma skill`);
}

const largura = 60;
console.log(`\nVerificando ${slugs.length} skills\n${"─".repeat(largura)}`);

if (avisos.length) {
  console.log("\nAVISOS");
  avisos.forEach((a) => console.log("  ·", a));
}

if (erros.length) {
  console.log("\nERROS");
  erros.forEach((e) => console.log("  ✗", e));
  console.log(`\n${erros.length} erro(s). O catálogo não está válido.\n`);
  process.exit(1);
}

console.log(
  `\nTodas as ${slugs.length} válidas${avisos.length ? `, com ${avisos.length} aviso(s)` : ""}.\n`,
);
