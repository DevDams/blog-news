import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const recupererListeUtilisateurs = async () => {
  return await axios.get(API_URL);
}

export const recupererDetailUtilisateurParId = async (userId) => {
  return await axios.get(`${API_URL}/${userId}`);
}

export const recupererPostsUtilisateurParId = async (userId) => {
  return await axios.get(`${API_URL}/${userId}/posts`);
}
