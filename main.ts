// The GPS Swears It Was a Shortcut — make.fun entry
// Writes the GPS's one-line excuse to /output/entry.txt (1-200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "According to my map, this lake is a road. According to the lake, it is not. I choose to believe the map.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
