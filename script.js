// Replace with your ThingSpeak channel ID and API key
const channelId = '2355731';
const apiKey = 'ELPM48LUVANE7R9E';

const field1Element = document.getElementById('field1-value');

function fetchData() {
  const url = `https://api.thingspeak.com/channels/${channelId}/fields/1/last.json?api_key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const field1Value = data.field1;
      field1Element.textContent = field1Value;

      if (field1Value < 100) {
        notifyUser('Field 1 value is below 100!');
      }
    })
    .catch(error => console.error(error));
}

// Mock notification function (replace with actual notification method)
function notifyUser(message) {
  alert(message);
}

// Call the fetchData function initially
fetchData();

// Set up an interval to fetch data every 5 seconds
setInterval(fetchData, 5000);
