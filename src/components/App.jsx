import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import getImages from '../api/images.service';
import Loader from '../components/Loader/Loader';
import ButtonLoad from '../components/Button/Button';
import Modall from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    showBtn: false,
    page: 1,
    error: null,
    loading: false,
    largeImg: null,
  };

  handleSubmit = inputValue => {
    this.setState({ searchQuery: inputValue, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.page !== this.state.page || prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
  
    this.setState({ loading: true });
    getImages(searchQuery, page)
      .then(images => {
        const { totalHits } = images;
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          showBtn: this.state.page < Math.ceil(totalHits / 12),
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    })
    )
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };

  setlargeImg = url => {
    this.setState({ largeImg: url });
  };

  render() {
    const { images, loading, largeImg, showBtn } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} setlargeImg={this.setlargeImg} />
        )}
        {loading && (
          <Loader
          />
        )}

        { showBtn &&  (
  <ButtonLoad onClick={this.onClickLoadMore} />
  )}
        {largeImg && <Modall onClose={this.closeModal} url={largeImg} />}
      </>
    );
  }
}

export default App;



