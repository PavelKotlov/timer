const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("press b or press a number between 1 & 9");

rl.input.on('keypress', (str, key) => {
  if (key.name === 'b') {
    rl.output.write('\x07');
    console.log();
  } else if (Number(key.name) >= 1 && Number(key.name) <= 9) {
    console.log(`\nsetting timer for ${key.name} seconds...`);
    setTimeout(() => {rl.output.write('\x07')}, Number(key.name) * 1000);
  } else if (key.ctrl && key.name === "c") {
    console.log("Thanks for using me, ciao!");
    rl.close();
  } else (
    console.log()
  )
});