import { mkdirSync, writeFileSync } from "node:fs";

const line1: string =
  "A queue is a human train where every carriage has to walk itself.";
const line2: string =
  "It maps the people standing one behind another in order, but leaves out that a real train never gets bored, cuts in line, or leaves to buy a snack.";
const entry: string = `${line1}\n${line2}`;

if (entry.length > 400) {
  throw new Error(`entry too long: ${entry.length} characters (max 400)`);
}
if (entry.split("\n").length !== 2) {
  throw new Error(
    `entry must be exactly 2 lines, got ${entry.split("\n").length}`,
  );
}
if (entry !== entry.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if ((line1.match(/\./g) ?? []).length !== 1) {
  throw new Error("line 1 must be exactly one sentence (one vivid analogy)");
}
if (!line2.includes("maps") || !line2.includes("leaves out")) {
  throw new Error(
    "line 2 must say what the analogy maps and what it leaves out",
  );
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry);
console.log(`wrote ${entry.length} characters to ${outDir}/entry.txt`);
