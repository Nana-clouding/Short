const form = document.getElementById('urlForm');
const longUrlInput = document.getElementById('longUrl');
const shortUrlDiv = document.getElementById('shortUrl');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const longUrl = longUrlInput.value;
  const apiKey = 'e96e11ef1c7a4b09b5ddde9f604da94b'; // ここにあなたのAPIキーを置き換える

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

    const data = await response.json();
    shortUrlDiv.textContent = data.shortUrl;
  } catch (error) {
    console.error('Error:', error);
    shortUrlDiv.textContent = 'エラーが発生しました';
  }
});
