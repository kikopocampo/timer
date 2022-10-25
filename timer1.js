const secs = process.argv.slice(2);
for (const sec of secs) {
  if (sec && sec > -1) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sec * 1000);
  }
}
