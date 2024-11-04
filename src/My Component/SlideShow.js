import React, { useState, useEffect } from "react";

// Array of cats with required images
const topCats = [
  { id: 0, image_url: require('./Images/Cat1.jpg') },
  { id: 1, image_url: require('./Images/Cat2.jpg') },
  { id: 2, image_url: require('./Images/Cat3.jpg') },
  { id: 3, image_url: require('./Images/Cat4.jpg') },
  { id: 4, image_url: require('./Images/Cat5.jpg') }
];

// Automatic Slideshow Component
function AutomaticSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % topCats.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>Automatic Slideshow</h2>
      <img
        src={topCats[currentSlide].image_url}
        alt={`Slide ${currentSlide}`}
        style={{ width: "400px", height: "300px", objectFit: "cover" }}
      />
    </div>
  );
}

// Manual Slideshow Component
function ManualSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % topCats.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + topCats.length) % topCats.length);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>Manual Slideshow</h2>
      <img
        src={topCats[currentSlide].image_url}
        alt={`Slide ${currentSlide}`}
        style={{ width: "400px", height: "300px", objectFit: "cover" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={prevSlide} style={{ marginRight: "10px" }}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

// Main component
function SlideShow() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Slideshows</h1>
      <AutomaticSlideshow />
      <ManualSlideshow />
    </div>
  );
}

export default SlideShow;
