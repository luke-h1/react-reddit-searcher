export default async (searchTerm) => { 
  const API_URL = `https://www.reddit.com/search.json?q=${searchTerm}`;
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  return data.data.children.map((item) => item);   
}