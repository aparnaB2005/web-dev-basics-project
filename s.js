document.addEventListener("DOMContentLoaded", () => {
  const alertButton = document.getElementById("alertButton");
  const greetingText = document.getElementById("greetingText");
  const toggleTheme = document.getElementById("toggleTheme");

  alertButton.addEventListener("click", () => {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Hello!";

    if (hour < 12) {
      greeting = "Good morning!";
    } else if (hour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }

    greetingText.textContent = greeting;
  });

  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
