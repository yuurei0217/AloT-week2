document.addEventListener('DOMContentLoaded', () => {
  function updateTime() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;

    const now = new Date();
    
    // Format the time as HH:MM:SS
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Initial call to set the time immediately without delay
  updateTime();

  // Update time every 1000 milliseconds (1 second)
  setInterval(updateTime, 1000);
});
