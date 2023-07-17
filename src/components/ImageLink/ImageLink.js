import { Link } from 'react-router-dom';

const ImageLink = ({ image }) => {
  
  return (
    <Link to='/details' state={image} >
      <img src={image.previewURL} />
    </Link>
  )
}

export default ImageLink