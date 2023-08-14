const getImages = (searchQuery, page = 1) => {
  const API_KEY = '24502852-6a795cd657d1b023a90d357f4';
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
};

export default getImages;