import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(songs) {
  console.log(songs)
  let template = ''

  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    template += `
    <div class="col-3 results">
    <img src="${song.albumArt}"/>
    <h5>${song.artist}</h5>
    <h6>${song.title}</h6>
    <p>${song.collection}</p>
    <p>$ ${song.price}</p>
    <audio controls>
  <source src="${song.preview}">
  </audio>
  </div>
  `
  }

  document.getElementById('songs').innerHTML = template
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    // @ts-ignore
    $('#get-music-button').text('Loading...');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      // @ts-ignore
      $('#get-music-button').text('Get Music');
    })
  }


}


export default ItunesController

