import { useState } from 'react';
import PropTypes from 'prop-types';
import s from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal';

function ImageGalleryItem({ src, alt, largeImageURL }) {
  const [showModal, setshowModal] = useState(false);

  const toggleModal = () => setshowModal(!showModal);

  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={s.ImageGalleryItem_image}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageURL} alt={alt} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
