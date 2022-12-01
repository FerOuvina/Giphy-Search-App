const apiKey = 'hFv8OeXUU3hh5g3av7nTj9gMJZxGgcmL';

function getGifs({keyword} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=r&lang=en`;

  return (
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data = []} = response;
        if (Array.isArray(data)) {
          const gifs = data.map(img => {
            const {images, title, id} = img;
            const {url} = images.downsized_medium;
            return { title, id, url};
          });
          return gifs;
        };
      })
  );
};

export default getGifs;