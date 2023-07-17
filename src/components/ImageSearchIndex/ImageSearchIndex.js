import './image_index.scss';

const ImageSearchIndex = ({ searchResults }) => {
  const renderSearchResults = searchResults.map(image => {
    return (
      <li key={image.id} className='image-list-item'>
        <img src={image.previewURL} />
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
