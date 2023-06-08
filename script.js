document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate Brahma Muhurat time
    function calculateBrahmaMuhurat(latitude, longitude) {
      // Your code to calculate Brahma Muhurat time based on sunrise time goes here
      // Replace the code below with your implementation
  
      const brahmaMuhuratStart = '03:25';
      const brahmaMuhuratEnd = '04:13';
  
      return {
        start: brahmaMuhuratStart,
        end: brahmaMuhuratEnd
      };
    }
  
    // Function to display the Brahma Muhurat time on the webpage
    function displayBrahmaMuhuratTime(start, end) {
      const brahmaMuhuratTimeDiv = document.getElementById('brahma-muhurat-time');
      brahmaMuhuratTimeDiv.innerHTML = `<p>Start Time: <span>${start}</span></p><p>End Time: <span>${end}</span></p>`;
    }
  
    // Function to get user's current location
    function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          const brahmaMuhurat = calculateBrahmaMuhurat(latitude, longitude);
          displayBrahmaMuhuratTime(brahmaMuhurat.start, brahmaMuhurat.end);
        });
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    }
  
    // Call the function to get the user's current location
    getUserLocation();
  });
  