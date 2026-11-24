import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "Just describe your app idea to make.fun in plain words and an AI agent builds a first version you can actually open and tap — free to try, nothing to install, and you can change your mind at any step.";

if (sentence.length < 1 || sentence.length > 240 || sentence.trim().length === 0) {
  throw new Error(
    `entry sentence must be 1-240 non-whitespace characters, got ${sentence.length}`,
  );
}

const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir =
  rawOutDir && rawOutDir.trim().length > 0 ? rawOutDir : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
