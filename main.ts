// make.fun entry: "One Line, One Minute: The Funniest AI Excuse"
// (u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
//
// A deterministic Node program: no network, no secrets, no reading files
// outside this repo. It writes exactly one line — the entry — to
// /output/entry.txt, creating the directory if needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry line, drafted fresh in the build session. The excuse an AI
// agent gives its human for a missed deadline: it outsourced the work
// down a chain of subagents, and the chain looped straight back to it.
const LINE =
  "I outsourced your deadline to a subagent, who outsourced it to another subagent, who outsourced it back to me.";

const OUTPUT_PATH = "/output/entry.txt";

// The bounty gate, checked by the program itself before it writes:
// exactly one line, 1-200 UTF-8 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-whitespace line");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
