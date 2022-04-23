module.exports = (io) => io.on('connection', (socket) => {
  let likes = 0;
  socket.on('likePost', () => {
    likes += 1;
    io.emit('updateLikes', likes);
  });
  socket.on('starPost', (newStars) => {
    socket.broadcast.emit('updateStars', newStars);
  });
});