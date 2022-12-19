import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const RESPONSE_OK = 200;

const searchParams = {
  key: '27696638-26ff957efade4726366145eb0',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
};

async function fetchImages(query, page = 1) {
  searchParams.q = query;
  searchParams.page = page;
  const response = await axios.get(BASE_URL, { params: searchParams });
  if (response.status !== RESPONSE_OK) {
    throw new Error(response.status);
  }
  return response.data;
}

export default fetchImages;
