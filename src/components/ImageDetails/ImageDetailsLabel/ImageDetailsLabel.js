const ImageDetailsLabel = ({ labelName, value}) => {
  return (
    <div>
      <span className='image-details-label'>
        {labelName}: 
      </span> 
      {value}
    </div>
  )
}

export default ImageDetailsLabel