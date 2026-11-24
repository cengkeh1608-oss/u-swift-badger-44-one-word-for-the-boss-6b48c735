// One Word for the Boss — entry: "Yesterday" (9 chars, 24/25 from 20 drafts).
// The boss who always needed it yesterday. Turning his favourite line into
// his name is the joke itself: a colleague can say "Yesterday wants it by
// noon" and the whole room laughs with no explanation needed. It beat Echo
// (23/25, clever but a smile, not a laugh), Ghoster and Bottleneck (23/25,
// just as true but less funny), and the whole cliché field — Micromanager,
// Bossy, Tyrant — on freshness alone. A real single word, true in every
// workplace, and it travels from kitchen to warehouse to office. It even
// carries a second true reading for free: the boss stuck in yesterday.
import { writeFileSync, mkdirSync } from "node:fs";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "Yesterday");
