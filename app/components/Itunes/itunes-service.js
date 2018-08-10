import Song from "../../models/Song.js";


class ItunesService {

  //DO NOT MODIFY
  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?term=' + artist;
    //Casts each object to 
    // @ts-ignore
    return $.getJSON(url).then(function (response) {
      var songList = response.results.map(new Song)
      return songList;
    })
  }


}



export default ItunesService