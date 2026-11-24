import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "Just describe your app idea to make.fun in plain words and an AI agent builds a first version you can actually open and tap — free to try, nothing to install, and you can change your mind at any step.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
