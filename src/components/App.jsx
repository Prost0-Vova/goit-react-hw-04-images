import {useState, useEffect} from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import getImages from '../api/images.service';
import Loader from '../components/Loader/Loader';
import ButtonLoad from '../components/Button/Button';
import Modall from './Modal/Modal';

export  function App () {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  const [, setError] = useState(null)
  const [loading, setLoading] = useState(false);
  const [largeImg, setLargeImg] = useState(null);



  const handleSubmit = inputValue => {

     setQuery(inputValue);
     setPage(1);
     setImages([]);
  };



  useEffect(() => {
    let prevPage = page;
    let prevQuery = query;

    if (prevPage !== page || prevQuery !== query) {
      fetchImages();
    }

    prevPage = page;
    prevQuery = query;
  }, [page, query, fetchImages]);


  const fetchImages = () => {
  
    setLoading(true)
    getImages(query, page)
      .then(images => {
        const { totalHits } = images;
        setImages(prevImages => [...prevImages, ...images.hits]);
        setShowBtn(page < Math.ceil(totalHits / 12))
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      });
  };

  const onClickLoadMore = () => {
    setPage(prev => prev + 1)

  };

  const closeModal = () => {
    setLargeImg(null)
  };

  const setlargeImg = url => {
    setLargeImg(url)
  };

  

    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} setlargeImg={setlargeImg} />
        )}
        {loading && (
          <Loader
          />
        )}

        { showBtn &&  (
  <ButtonLoad onClick={onClickLoadMore} />
  )}
        {largeImg && <Modall onClose={closeModal} url={largeImg} />}
      </>
    );
  }





export default App;
