// live_datetime.js
function updateDateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();
  
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit' // Add the 'second' option to display seconds
    };
    const formattedTime = now.toLocaleString('en-US', timeOptions);
  
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedDate = now.toLocaleString('en-US', dateOptions);
  
    timeElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
  }
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
  
  // Call updateDateTime immediately to display the initial date and time
  updateDateTime();
  