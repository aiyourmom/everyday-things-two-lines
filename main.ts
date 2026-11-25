import { writeFileSync } from "node:fs";

const line1: string = "A traffic jam is a parking lot that forgot it was a road.";
const line2: string = "It maps the cars standing bumper to bumper with nowhere to go, but leaves out the drivers, who are awake, impatient, and honking at a road that cannot hear them.";
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
if (!line2.includes("maps") || !line2.includes("leaves out")) {
  throw new Error("line 2 must name what the analogy maps and what it leaves out");
}

writeFileSync("/output/entry.txt", entry);
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
