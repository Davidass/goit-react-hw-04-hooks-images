import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ImagesInfo from 'components/ImagesInfo';
import Container from 'components/Container';
import Searchbar from './Searchbar';

function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handelFormSubmit = name => {
    setImageName(name);
    setImages([]);
    setPage(1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handelFormSubmit} />
      <ImagesInfo
        imageName={imageName}
        images={images}
        page={page}
        setImages={setImages}
        setPage={setPage}
      />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
