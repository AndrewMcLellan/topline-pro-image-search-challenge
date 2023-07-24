export const sanitizeImageData = (imageData) => {

  const { hits } = imageData;

  return hits.map(image => {
    const { 
      id, 
      largeImageURL, 
      previewURL, 
      tags, 
      user
     } = image;

    return {
      id, 
      largeImageURL,
      previewURL,
      tags, 
      user
    }
  })
}