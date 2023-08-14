import PropTypes from 'prop-types';
import {Item, Image} from "./ImageGalleryItem.styled";

export const ImageGalleryItem =  ({ id, url, setlargeImg, largeUrl }) =>  {


    return (
        <Item >
            <Image src={url} alt="Image" onClick={() => {setlargeImg(largeUrl)} }/>
        </Item>
    );
};


ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  largeUrl: PropTypes.string,
  setlargeImg: PropTypes.func
}

  export default ImageGalleryItem;