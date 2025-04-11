document.addEventListener("DOMContentLoaded", () => {
    const words = [
      "building smart, meaningful tools",
      "designing with intention",
      "engineering thoughtful products",
      "creating with purpose"
    ];
  
    let index = 0;
    const rotatingEl = document.querySelector(".rotating-words");
  
    function rotateWords() {
      rotatingEl.style.opacity = 0;
      setTimeout(() => {
        rotatingEl.textContent = words[index];
        rotatingEl.style.opacity = 1;
        index = (index + 1) % words.length;
      }, 1000); // match 1s CSS fade
    }
  
    rotateWords(); // Initial display
    setInterval(rotateWords, 5000); // 5 seconds total
  });
  