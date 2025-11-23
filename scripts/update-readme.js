const fs = require("fs");
const path = "README.md";

const readme = fs.readFileSync(path, "utf8");

const now = new Date().toISOString();

let updated;

if (/Last update: .*/.test(readme)) {
    updated = readme.replace(/Last update: .*/g, `Last update: ${now}`);
} else {
    updated = readme + `\n\nLast update: ${now}\n`;
}

fs.writeFileSync(path, updated, "utf8");
console.log("README updated with timestamp:", now);
