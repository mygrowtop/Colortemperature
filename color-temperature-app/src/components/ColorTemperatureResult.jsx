import React from 'react';

const ColorTemperatureResult = ({ result }) => {
  if (!result) {
    return null;
  }

  const { temperature, rgb, suggestion, imageInfo, visualColor } = result;

  return (
    <div className="result-container">
      <h2>Analysis Results</h2>
      
      <div className="result-section">
        <h3>Color Temperature</h3>
        <div className="temperature-display">
          <div 
            className="color-sample" 
            style={{ backgroundColor: visualColor.cssColor }} 
          />
          <div className="temperature-value">
            <p><strong>Temperature:</strong> {Math.round(temperature)}K</p>
            <p><strong>RGB Value:</strong> R: {rgb.r}, G: {rgb.g}, B: {rgb.b}</p>
          </div>
        </div>
      </div>
      
      <div className="result-section">
        <h3>Camera Setting Suggestion</h3>
        <div className="suggestion-details">
          <p><strong>White Balance Mode:</strong> {suggestion.whiteBalance}</p>
          <p><strong>Kelvin Setting:</strong> {suggestion.kelvinSetting}</p>
          <p><strong>Preset:</strong> {suggestion.preset}</p>
          <p><strong>Note:</strong> {suggestion.description}</p>
        </div>
      </div>
      
      <div className="result-section">
        <h3>Image Information</h3>
        <div className="image-info">
          <p><strong>Dimensions:</strong> {imageInfo.dimensions}</p>
          <p><strong>Aspect Ratio:</strong> {imageInfo.aspectRatio}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorTemperatureResult; 