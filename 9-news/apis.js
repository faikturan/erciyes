const API_KEY = "0b4f8d04a56b454cb6d4c12d8403f586";

export async function getNews(page = 1, pageSize = 20) {
    const sources = "bbc-news,cbc-news,nbc-news,fox-news,mtv-news";
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${sources}=&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    return jsonData.articles || [];
  }