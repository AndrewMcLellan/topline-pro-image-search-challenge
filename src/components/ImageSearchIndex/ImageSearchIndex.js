import ImageLink from '../ImageLink/ImageLink';
import './image_index.scss';

const ImageSearchIndex = ({ searchResults }) => {
  const renderSearchResults = searchResults.map(image => {
    return (
      <li key={image.id} className='image-list-item'>
        <ImageLink image={image}/>
      </li>
    )
  })

  return (
    <div>
      <ul className='image-list-root'>
        {renderSearchResults}
      </ul>
    </div>
  )
}

export default ImageSearchIndex;
