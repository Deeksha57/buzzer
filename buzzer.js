function buzzer() {
  const audio = new Audio('buzzer.wav'); // Replace 'buzzer.mp3' with the path to your buzzer sound file
  let count = 0;
  const interval = setInterval(() => {
    count++;
    console.log(`Buzz! This is buzz number ${count}`);
    audio.play();
    if (count === 180) {
      clearInterval(interval);
      console.log('Buzzer stopped.');
    }
  }, 30000); // 30,000 milliseconds = 30 seconds
}

buzzer();
