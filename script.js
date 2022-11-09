const notificationButton = document.querySelector('#notification-button');
let secondsAway = 0;
let interval;
let notification;


document.addEventListener('DOMContentLoaded', () => {
  Notification.requestPermission();
});

const addNotification = () => {
  if (Notification.permission !== 'granted') return;

  new Notification('Hey There Bud!', {
    body: 'Where you going?',
    vibrate: true
  });
};

const handleNavigateAway = () => {
  const initialTime = new Date();
  if (document.visibilityState === 'hidden') {
    interval = setInterval(() => {
      secondsAway = Math.floor((new Date() - initialTime) / 1000);
      notification = new Notification(`Don't leave!`, {
        body: `You've been gone ${secondsAway} seconds...`,
        tag: 'The Tag You Want',
        requireInteraction: true,
      })
    }, 100);
  } else {
    if (interval) clearInterval(interval);
    if (notification) notification.close();
  };
};

notificationButton.addEventListener('click', addNotification);
document.addEventListener('visibilitychange', handleNavigateAway);