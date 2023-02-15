const alarmTimes = process.argv.slice(2);
// Check if no arguments are provided
if (alarmTimes.length === 0) {
  console.log("Please provide at least one alarm time in seconds");
  return;
}

// Check if provided arguments contain NaN nor a negative number.
for (const time of alarmTimes) {
  if (!Number(time) || Number(time) < 0) {
    console.log(`PLease provide only positive numbers. Error [${time}]`);
    return;
  }
}

// If both barricade statements are passed then start the timers!
for (const time of alarmTimes) {
  setTimeout(() => {
    if (time === '1') {
      console.log(`${time} second alarm`);
    } else {
      console.log(`${time} seconds alarm`);
    }

    process.stdout.write('\x07');
  }, Number(time) * 1000);
}