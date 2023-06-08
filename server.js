const express = require('express');
const moment = require('moment');
const suncalc = require('suncalc'); // Install the suncalc package using npm

const app = express();

// Serve static files (e.g., HTML, CSS, images)
app.use(express.static('public'));

// Endpoint to get the next Brahma Muhurat time
app.get('/brahma-muhurat', (req, res) => {
  const { lat, lon } = req.query;

  // Calculate the next Brahma Muhurat time based on location and current date
  const brahmaMuhuratTime = calculateBrahmaMuhuratTime(lat, lon);

  // Send the Brahma Muhurat time as the response
  res.json({ brahmaMuhuratTime });
});

// Start the server
const port = 3000; // Change the port number if desired
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Function to calculate the next Brahma Muhurat time
function calculateBrahmaMuhuratTime(lat, lon) {
  // Get the current date
  const currentDate = moment().utcOffset(0);

  // Calculate the times for the current date at the given location
  const times = suncalc.getTimes(currentDate.toDate(), lat, lon);

  // Retrieve the sunrise time and convert it to local time
  const sunrise = moment(times.sunrise).local();

  // Calculate the Brahma Muhurat time
  const brahmaMuhuratStart = sunrise.clone().subtract(1, 'hours').subtract(36, 'minutes').format('HH:mm');
  const brahmaMuhuratEnd = sunrise.clone().subtract(1, 'hours').add(12, 'minutes').format('HH:mm');

  return { start: brahmaMuhuratStart, end: brahmaMuhuratEnd };
}
