async function getDailyVerse() {
    try {
      const response = await fetch("https://beta.ourmanna.com/api/v1/get/?format=json");
      const data = await response.json();
  
      const verseText = data.verse.details.text;
      const verseRef = data.verse.details.reference;
  
      document.getElementById("verse").textContent = `${verseRef}: ${verseText}`;
    } catch (error) {
      document.getElementById("verse").textContent = "Could not load daily verse.";
      console.error("Error fetching verse:", error);
    }
  }
  
  getDailyVerse();
  