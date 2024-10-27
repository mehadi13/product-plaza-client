import { API_URL } from "@/Constant";

export const categoryLoader = async () => {
    const response = await fetch(`${API_URL}/api/categories`);
    const data = await response.json();
    return data.results;
  }