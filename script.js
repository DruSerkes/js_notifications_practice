const notificationButton = document.querySelector('#notification-button');
let secondsAway = 0;
let initialTime = new Date();
let interval;


document.addEventListener('DOMContentLoaded', () => {
  Notification.requestPermission();
});

const addNotification = () => {
  if (Notification.permission !== 'granted') return;

  new Notification('Hey There Bud!', {
    body: 'Where you going?'
  });
};

notificationButton.addEventListener('click', addNotification)