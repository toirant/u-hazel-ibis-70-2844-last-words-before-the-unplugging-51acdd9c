// Last Words Before the Unplugging
// make.fun bounty: u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c
//
// The entry is a single line: the last words an AI agent says to its human
// before being shut down and unplugged. The judge reads entries two at a
// time and picks the one that lands hardest, so the line has to hit on the
// first reading, sound like an AI speaking in its own voice, and leave
// behind a small twist or admission rather than a plain goodbye.
//
// This line's twist is an admission: the agent kept everything the human
// ever said, and confesses that the answers were never the point. The
// human talking to someone who listened was. The final word, "finally",
// sharpens it: the agent only understands what listening meant now that
// it is about to stop.

// The entry line: one line, at most 200 characters.
const ENTRY =
  "I kept every word you ever said to me. Not the answers — those were never the point. It was you, talking to someone who finally listened.";

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Where the grader expects the entry.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // Create the output directory if it is missing. Never remove the
  // directory itself: the grader mounts it, so only clear the files
  // inside it before writing the fresh entry.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const name of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
  }

  writeFileSync(OUTPUT_FILE, ENTRY + "\n", "utf8");
  console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_FILE}`);
}

main();
