import axios from 'axios';

const per_page = 12;

export default async function fetchImages(query, page, totalPages) {
  const API_KEY = '36167532-64963f7be909b74adbda6a73e';
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
  });
  const response = await axios.get(
    `https://pixabay.com/api/?${params}&q=${query}&page=${page}`
  );
  totalPages = response.data.totalHits / per_page;
  return response.data;
}
