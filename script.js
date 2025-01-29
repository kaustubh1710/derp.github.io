document.getElementById("changeMessageBtn").addEventListener("click", function() {
  const messages = [
    "Make a wish and blow out the candles! 🎂",
    "Wishing you a day full of joy and laughter! 🎉",
    "Another year older, but you're still awesome! 🎈",
    "Cheers to another year of great memories! 🥳"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").textContent = randomMessage;

  // Optional: Animate the balloon after button click
  let balloon = document.getElementById("balloon");
  balloon.style.animation = 'none';
  balloon.offsetHeight; // Trigger reflow to reset animation
  balloon.style.animation = 'floatBalloon 5s infinite';
});
