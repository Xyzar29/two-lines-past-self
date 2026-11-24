// Two Lines to Your Past Self — make.fun entry
// (competition u-suga-two-lines-to-your-past-self-f36c83ca)
//
// Deterministically writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt): line 1 warns the past self about one specific
// moment; line 2 says in one sentence why that moment mattered.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "When Dad holds out the keys to his old truck and asks if you want it, say yes.";
const LINE_2 =
  "That truck carries you through college, two moves, and the last summer you ever spend with him.";

// The gate allows 1-280 characters of UTF-8 text; this entry is 175.
const text = `${LINE_1}\n${LINE_2}\n`;

if (text.length < 1 || text.length > 280) {
  throw new Error(`entry is ${text.length} characters, outside the 1-280 gate`);
}
if (text.trim().split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
process.stdout.write(text);
