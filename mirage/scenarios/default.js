export default function(server) {

  server.create('album', {
    artistName: 'Dream Theater',
    albumName: 'Six degrees of inner turbulence',
    genres: 'Progressive Metal',
    albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Dream_Theater_-_Six_Degrees_of_Inner_Turbulence.jpg',
    yearOfRelease: 2002,
    spotifyLink: 'https://open.spotify.com/album/4INFVEhhhnLiqNR4MVPaX8'
  });
  server.create('album', {
    artistName: 'Led Zeppelin',
    albumName: 'The song remains the same',
    genres: 'Rock',
    albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Led_Zeppelin_-_The_Song_Remains_the_Same.jpg',
    yearOfRelease: 1976,
    spotifyLink: 'https://open.spotify.com/album/0ui4S0TZghkf1d1Wz0oWpk'
  });
}
