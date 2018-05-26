const playlist = {
  artist1: 'song 1'
};

function updatePlaylist(playList, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playList;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artisName;
}