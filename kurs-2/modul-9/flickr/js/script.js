const elements = {
  search: {
    input: document.querySelector(".searchbar__input"),
    button: document.querySelector(".searchbar__button"),
  },
  gallery: document.querySelector(".gallery"),
};

async function fetchImages(query, perPage = 20) {
  const key = 'e3c351965c09374f9905ccd770f3ee2b';
  const endpoint = `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${key}&text=${query}&per_page=${perPage}&format=json&nojsoncallback=1&content_types=0&sort=relevance`

  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function renderImages(data, size = 'n') {
  // available sizes @ https://www.flickr.com/services/api/misc.urls.html
  data.photos.photo.forEach((photo) => {
    const image = document.createElement('img');
    image.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
    elements.gallery.appendChild(image);
  });
}

elements.search.button.addEventListener('click', async () => {
  document.querySelectorAll(".gallery img").forEach((image) => {
    image.remove();
  });

  renderImages(await fetchImages(elements.search.input.value));
});
