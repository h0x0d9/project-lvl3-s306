import axios from 'axios';
import parse from './rssparser';

const proxyURL = 'https://cors-anywhere.herokuapp.com/';

export default (feedUrl) => {
  const url = [proxyURL, feedUrl].join('');
  return axios.get(url).then(({ data }) => parse(data));
};
