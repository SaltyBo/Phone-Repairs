import React, { useState } from 'react';
import SlideShow from './SlideShow';
import ImageUpload from './ImageUpload';
import Discussion from './Discussion';
import Settings from './Settings';
import AccessoryDetail from './AccessoryDetail';
import TDModel from './3Dmodel';

function AdvancedJS() {
  const [activeDemo, setActiveDemo] = useState('demo1form');
  const [backgroundColor, setBackgroundColor] = useState('#f8f9fa'); // Default background color
  const [fontSize, setFontSize] = useState('medium'); // Default font size

  const handleButtonClick = (demoId) => {
    setActiveDemo(demoId);
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color); // Update the background color
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size); // Update the font size
  };

  return (
    <main style={{ minHeight: '80vh' }}>
      <div className="row" style={{ minHeight: '80vh' }}>
        {/* Buttons Column */}
        <div className="col-12 col-md-3">
          <div className="row">
            <button
              className={`col-6 col-md-12 btn ${activeDemo === 'demo1form' ? 'btn-warning' : 'btn-secondary'}`}
              type="button"
              onClick={() => handleButtonClick('demo1form')}
            >
              Slideshow
            </button>
            <button
              className={`col-6 col-md-12 btn ${activeDemo === 'demo2form' ? 'btn-warning' : 'btn-secondary'}`}
              type="button"
              onClick={() => handleButtonClick('demo2form')}
            >
              3D model
            </button>
            <button
              className={`col-6 col-md-12 btn ${activeDemo === 'demo3form' ? 'btn-warning' : 'btn-secondary'}`}
              type="button"
              onClick={() => handleButtonClick('demo3form')}
            >
              Discussion Board
            </button>
            <button
              className={`col-6 col-md-12 btn ${activeDemo === 'demo4form' ? 'btn-warning' : 'btn-secondary'}`}
              type="button"
              onClick={() => handleButtonClick('demo4form')}
            >
              Settings
            </button>
            <button
              className={`col-6 col-md-12 btn ${activeDemo === 'demo5form' ? 'btn-warning' : 'btn-secondary'}`}
              type="button"
              onClick={() => handleButtonClick('demo5form')}
            >
              Accessory Detail
            </button>
          </div>
        </div>

        {/* Forms Column */}
        <div className="col-12 col-md-9">
          {/* Demo 1 Form */}
          <div className={`collapse ${activeDemo === 'demo1form' ? 'show' : ''}`}>
            <div className="card card-body" style={{ minHeight: '70vh', backgroundColor, fontSize }}>
              <SlideShow />
            </div>
          </div>

          {/* Demo 2 Form */}
          <div className={`collapse ${activeDemo === 'demo2form' ? 'show' : ''}`}>
            <div className="card card-body" style={{ minHeight: '70vh', backgroundColor, fontSize }}>
              <TDModel />
            </div>
          </div>

          {/* Demo 3 Form */}
          <div className={`collapse ${activeDemo === 'demo3form' ? 'show' : ''}`}>
            <div className="card card-body" style={{ minHeight: '70vh', backgroundColor, fontSize }}>
              <Discussion />
            </div>
          </div>

          {/* Demo 4 Form */}
          <div className={`collapse ${activeDemo === 'demo4form' ? 'show' : ''}`}>
            <div className="card card-body" style={{ minHeight: '70vh', backgroundColor, fontSize }}>
              <Settings onColorChange={handleColorChange} onFontSizeChange={handleFontSizeChange} />
              <ImageUpload />
            </div>
          </div>

          {/* Demo 5 Form */}
          <div className={`collapse ${activeDemo === 'demo5form' ? 'show' : ''}`}>
            <div className="card card-body" style={{ minHeight: '70vh', backgroundColor, fontSize }}>
              <AccessoryDetail />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdvancedJS;
