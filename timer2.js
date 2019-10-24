const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write('\x07')
  }
  if (key > 0 && key < 10) {
    console.log(`setting timer for ${key} seconds`)
    setTimeout(()=> {process.stdout.write('\x07')}, key * 1000);
  }
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});

console.log('after callback');

