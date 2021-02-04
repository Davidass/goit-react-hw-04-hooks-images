import React, { useState, useEffect } from 'react';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import ImagesErrorView from 'components/ImagesErrorView';
import LoaderView from 'components/LoaderView';
import PropTypes from 'prop-types';

import pixabayAPI from '../../services/apiPixabay';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImagesInfo({ imageName, images, page, setImages, setPage }) {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  // const [images, setImages] = useState([]);
  // const [page, setPage] = useState(1);
  const [arePicturesOver, setArePicturesOver] = useState(false);
  // const [totalHits, setTotalHits] = ueState(0);

  useEffect(() => {
    if (!imageName) {
      console.log('Такого имени нет');
      return;
    }
    setStatus(Status.PENDING);

    pixabayAPI
      .fetchPixabay(imageName, page)
      .then(newImages => {
        if (newImages.total !== 0) {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setArePicturesOver(newImages.totalHits - page * 12 <= 0);
          setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error('Invalid request'));
        return window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [imageName, page, setImages]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (status === Status.IDLE) {
    return <p>Please enter a value for search images</p>;
  }

  if (status === Status.REJECTED) {
    return <ImagesErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED || status === Status.PENDING) {
    return (
      <>
        <ImageGallery images={images} />

        {status === Status.RESOLVED && !arePicturesOver && (
          <Button onLoadMore={onLoadMore} />
        )}
        {status === Status.PENDING && <LoaderView />}
      </>
    );
  }
}

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setImages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default ImagesInfo;
