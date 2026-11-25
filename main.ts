import * as fs from "node:fs";
import * as path from "node:path";

const OUT_DIR = "/output";
const ENTRY_PATH = path.join(OUT_DIR, "entry.txt");

// A loading-screen tip for the human at the keyboard and the AI agent
// doing the build: the bar is not frozen, it is having an existential
// crisis about the codebase, and both of them are in it together.
const tipLines = [
  "Tip: the loading bar isn't stuck — it's just thinking about all the",
  "life choices that led to this codebase. Breathe. We're in this together.",
];
const tip = tipLines.join(" ");

function writeEntry(): void {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(ENTRY_PATH, tip, { encoding: "utf8" });
}

writeEntry();
