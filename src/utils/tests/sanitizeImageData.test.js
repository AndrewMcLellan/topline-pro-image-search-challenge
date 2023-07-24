import { sampleImages, sanitizedPropertyNames } from "./test_constants";
import { sanitizeImageData } from "../sanitizeImageData";

describe('sanitizeImageData', () => {
  it('returns of sanitized image data for consumption in the app', () => {
    const sanitizedData = sanitizeImageData(sampleImages);
    const sanitizedDataKeys = Object.keys(sanitizedData[0]);
    
    expect(Array.isArray(sanitizedData)).toBe(true);
        
    sanitizedDataKeys.forEach(key => {
      expect(sanitizedPropertyNames).toContain(key);
    })
  })
})