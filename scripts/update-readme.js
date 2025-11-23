const fs = require("fs");
const path = "README.md";

const readme = fs.readFileSync(path, "utf8");

const now = new Date();

const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Baku",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
});

const parts = formatter.formatToParts(now);
const get = (type) => parts.find((p) => p.type === type).value;

const day = get("day");
const month = get("month");
const year = get("year");
const hour = get("hour");
const minute = get("minute");
const second = get("second");

const bakuTime = `${day}.${month}.${year} ${hour}:${minute}:${second} (Baku time)`;

const newLine = `Last update (Baku time): ${bakuTime}`;

let updated;
if (/Last update.*$/m.test(readme)) {
    updated = readme.replace(/Last update.*$/gm, newLine);
} else {
    updated = readme + `\n\n${newLine}\n`;
}

fs.writeFileSync(path, updated, "utf8");
console.log("README updated with:", bakuTime);
