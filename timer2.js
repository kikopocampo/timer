const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');
console.log(`Interactive Timer!`,
  `\nPress 'b' to hear a beep`,
  `\nPress any 'number' from 1 to 9 and hear a beep after 'number' seconds`,
  `\nPress ctrl + c to exit`);
stdin.on('data',(key) => {
  
  if (key === '\u0003') {
    console.log('Thanks for using me, bye!');
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\r');
    process.stdout.write('\x07');
  }
  if (key > 0 && key < 10) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});