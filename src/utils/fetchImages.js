export const fetchImages = async (params) => {
  const { REACT_APP_PIXBAY_SECRET, REACT_APP_PIXBAY_BASE_ENDPOINT } = process.env;
  const serachParams = new URLSearchParams(params).toString();
  const response = await fetch(`${REACT_APP_PIXBAY_BASE_ENDPOINT}?key=${REACT_APP_PIXBAY_SECRET}&${serachParams}`);
  const data = await response?.json();

  return data
}