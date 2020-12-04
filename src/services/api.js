import axios from 'axios';

axios.defaults.baseURL = 'http://ws.audioscrobbler.com/2.0/';

const apiKey = '56909b84166e6bfcea981aed29186387';

const getPlaylist = () =>
  axios.get(
    `?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`,
  );
//  /2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json
const getArtistkDetails = artistName => {
  return axios.get(
    `?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`,
  );
};

export default {
  getPlaylist,
  getArtistkDetails,
};
