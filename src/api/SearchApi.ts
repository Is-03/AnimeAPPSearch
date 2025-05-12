import axios from "axios";

export const searchAnime = async (query: string, page: number = 1) => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/anime", {
      params: { q: query, page },
    });

    return {
      results: response.data.data, 
      totalPages: response.data.pagination.last_visible_page, 
    };
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return { results: [], totalPages: 1 }; 
  }
};
