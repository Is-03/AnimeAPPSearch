import axios from "axios";

export const getAnimeDetails = async (id: string | number) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
  return response.data;
};
