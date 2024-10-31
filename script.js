const form = document.getElementById('urlForm');
const longUrlInput = document.getElementById('longUrl');
const shortUrlDiv = document.getElementById('shortUrl');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const longUrl = longUrlInput.value;
  const apiKey = '96e11ef1c7a4b09b5ddde9f604da94b'; // 必ずあなたのAPIキーに置き換えてください

  try {
    const response = await fetch('https://api.rebrandly.com/v1/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey
      },
      body: JSON.stringify({ destinati   
on: longUrl })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    shortUrlDiv.textContent = data.shortUrl;
  } catch (error) {
    console.error('Error:', error);
    shortUrlDiv.textContent = 'エラーが発生しました。詳細:', error.message;
  }
});
