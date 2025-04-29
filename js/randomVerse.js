async function getRandomVerse() {
  const verses = [
    "john 3:16", "psalm 23:1", "romans 8:28", "philippians 4:13", "isaiah 41:10"
  ];
  const today = new Date().getDate();
  const verseQuery = verses[today % verses.length];

  try {
    const response = await fetch(`https://bible-api.com/${encodeURIComponent(verseQuery)}`);
    const data = await response.json();
    document.getElementById("verse").textContent = `${data.reference}: ${data.text}`;
  } catch (err) {
    document.getElementById("verse").textContent = "Could not load verse 😔";
  }
}

getRandomVerse();