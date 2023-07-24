import { sanitizeImageData } from "./sanitizeImageData";

export const fetchImages = async (params) => {
  // The page prevents searching without input, so we don't need to check for params in this file before trying to do the fetch.
  const { REACT_APP_PIXBAY_SECRET, REACT_APP_PIXBAY_BASE_ENDPOINT } = process.env;
  // 1. Format the the params.
  const serachParams = new URLSearchParams(params).toString();

  // 2. derive the path from the environment variables and params. If search params are undefined, all images will be queried.  
  const path =`${REACT_APP_PIXBAY_BASE_ENDPOINT}?key=${REACT_APP_PIXBAY_SECRET}&${serachParams}`

  // 3. fetch the images.
  // const response = await fetch(path);
  
  // if (response.ok) {
  //   const data = await response?.json();
  //   return { searchResults: data }
  // } else {
  //   // Don't throw an exception here to precent app from breaking entirely. 
  //   return { error: 'Something went wrong, please try again'}
  // }
  // REFACTOR 
  // - removed clunky data fetching, use try/catch instead . 
  // - updated the message to provide the actual error message.

  try { 
    const response = await fetch(path);
    const data = await response?.json();

    const sanitizedData = sanitizeImageData(data)
    return { searchResults: sanitizedData }

  } catch (error) {
    return { error: error.message}
  }
}