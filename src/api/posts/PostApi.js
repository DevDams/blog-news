import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const recupererListePosts = async () => {
  return await axios.get(API_URL);
}