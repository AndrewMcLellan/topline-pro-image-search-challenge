import ImageDetailsLabel from './ImageDetailsLabel/ImageDetailsLabel';
import './image_details.scss';
import { useLocation } from "react-router-dom";

const fields = [
  'user',
  'tags'
]
const ImageDetails = () => {
  const location = useLocation()
  const { state } = location;
  const { largeImageURL, tags, user } = state;
  return (
    <div className='image-details-root'>
      <img src={largeImageURL} />
      <div className='image-details-info'>
        {
          fields.map(field => (
            <ImageDetailsLabel labelName={field} value={state[field]} />    
          ))
        }
        {/* <ImageDetailsLabel labelName={'User'} value={user} />
        <ImageDetailsLabel labelName={'Tags'} value={tags} /> */}
      </div>
    </div>
  )
}

export default ImageDetails;
