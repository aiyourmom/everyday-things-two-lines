import { writeFileSync } from "node:fs";

const line1: string = "A zipper is a row of tiny teeth that hold hands to keep your jacket shut.";
const line2: string = "It maps the teeth locking together when you pull the tab, but leaves out that real teeth chew food and never line up in a perfect row.";
const entry: string = `${line1}\n${line2}`;

if (entry.length > 400) {
  throw new Error(`entry too long: ${entry.length} chars (max 400)`);
}
if (entry.split("\n").length !== 2) {
  throw new Error(`entry must be exactly 2 lines, got ${entry.split("\n").length}`);
}
if (entry !== entry.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

writeFileSync("/output/entry.txt", entry);
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
