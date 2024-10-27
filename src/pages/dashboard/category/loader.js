export const categoryLoader = async () => {
    const response = await fetch(`${API_URL}/api/categories`);
  
    if (!response.ok) {
        throw Error("Could not fetch products.");
    }
  
    const data = await response.json();
    return data.results;
  }