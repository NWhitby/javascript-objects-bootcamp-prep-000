const playlist = {
  artist1: 'song 1'
};

function updatePlaylist(playList, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playList;
}

function removesFromPlaylist(playlist, artistName) {
  delete playlist.artisName;
}