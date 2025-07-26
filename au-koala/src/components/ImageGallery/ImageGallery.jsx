import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [randomImage, setRandomImage] = useState(''); // for picsum photo

  // Fetch gallery images from local API
  useEffect(() => {
    axios.get('http://localhost:4000/images')
      .then(response => {
        setImages(response.data);
        setLoading(false);
      })
  }, []);

  // Fetch single random image from Picsum
  // useEffect(() => {
  //   axios.get('http://loc', { responseType: 'blob' })
  //     .then(res => {
  //       const imageURL = URL.createObjectURL(res.data);
  //       setRandomImage(imageURL);
  //     })
  //     .catch(error => {
  //       console.error('Error loading random image from Picsum:', error);
  //     });
  // }, []);

  if (loading) return <p className="loading-text">Loading images...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="gallery-container">
      {/* Random image from real API */}
      {randomImage && (
        <div className="image-wrapper">
          <h3>Random Image from Picsum</h3>
          <img src={randomImage} alt="Random" className="image" />
        </div>
      )}

      {/* Local image gallery */}
      {images.map((img) => (
        <div key={img.id} className="image-wrapper">
          <img
            src={img.url}
            alt={img.title}
            className="image"
          />
          <p>{img.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
