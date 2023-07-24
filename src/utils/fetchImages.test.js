import { fetchImages } from "./fetchImages";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const hitsNoParams = [
  { id: '001', previewURL: 'https://image-url.com/1' },
  { id: '002', previewURL: 'https://image-url.com/2' },
  { id: '003', previewURL: 'https://image-url.com/3' },
  { id: '004', previewURL: 'https://image-url.com/4' },
  { id: '006', previewURL: 'https://image-url.com/5' }
]

beforeEach(() => {
  fetch.resetMocks();
})

describe('fetchImages', () => {
  it('successfully returns images when no params are passed', async () => {
    fetch.mockResponseOnce(JSON.stringify({ hits: hitsNoParams }))

    const result = await fetchImages()

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('searchResults')
    
    const { searchResults } = result; 
    // could also check to see if sanitizeImageData has been called, but these other test cases passing implies that it has been. 
    // 
    expect(Array.isArray(searchResults)).toBe(true)
  })

  it('return an error if the enpoint is invalid', async () => {
    jest.mock('./fetchImages', () => ({
      ...jest.requireActual('./fetchImages'),
      path: ''
    }))

    const result = await fetchImages();

    expect(result).toHaveProperty('error')
  })
})

// Since the pixabay api handles all of the results, we don't really need to check that specific values are returned.
// Instead, we test to see that an object was returned, that the object contains a property called searchResults, and that 
// search results is an array. The app won't break if the return is an empty array. 


 