import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { ImageList} from './ImageGallery.styled';
import PropTypes from 'prop-types';




export default function ImageGallery({images, setlargeImg}) {
    return (
        <ImageList>
            {images.map(image => { return <ImageGalleryItem key={image.id} url={image.webformatURL} largeUrl={image.largeImageURL} setlargeImg={ setlargeImg}/>})}
        </ImageList>
    )
           
}

ImageGallery.propTypes = {
    images: PropTypes.array,
    setlargeImg: PropTypes.func
}