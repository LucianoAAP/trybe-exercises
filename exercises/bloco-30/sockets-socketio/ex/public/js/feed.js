const socket = window.io();

const likeIcon = document.querySelector('#likeIcon');
const starIcon = document.querySelector('#starIcon');

likeIcon.addEventListener('click', () => {
  socket.emit('likePost');
});

starIcon.addEventListener('click', () => {
  const currentStars = document.querySelector('#currentStars');
  const newStars = Number(currentStars.innerHTML) + 1;
  currentStars.innerHTML = newStars;
  socket.emit('starPost', newStars);
});

socket.on('updateLikes', (likes) => {
  const currentLikes = document.querySelector('#currentLikes');
  currentLikes.innerHTML = likes;
});

socket.on('updateStars', (newStars) => {
  starIcon.innerHTML = newStars;
});