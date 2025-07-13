/**
 * Image Color Temperature Analysis Tool
 * This file contains functions for analyzing image color temperature and providing camera setting recommendations
 */

/**
 * Convert file to data URL
 * @param {File} file - Image file
 * @returns {Promise<string>} - Data URL
 */
export const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Get average color from an image
 * @param {HTMLImageElement} img - Image element
 * @returns {Object} - Object containing r,g,b values and image information
 */
export const getAverageColor = (img) => {
  // Create Canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas dimensions
  canvas.width = img.width;
  canvas.height = img.height;
  
  // Draw image on canvas
  ctx.drawImage(img, 0, 0);
  
  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Calculate average RGB values
  let r = 0, g = 0, b = 0;
  let pixelCount = 0;
  
  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    pixelCount++;
  }
  
  // Calculate averages
  r = Math.round(r / pixelCount);
  g = Math.round(g / pixelCount);
  b = Math.round(b / pixelCount);
  
  // Collect basic image information
  const imageInfo = {
    dimensions: `${img.width} x ${img.height}`,
    aspectRatio: (img.width / img.height).toFixed(2),
  };
  
  return { r, g, b, imageInfo };
};

/**
 * Calculate color temperature from RGB values - Based on Planckian Locus approximation algorithm
 * @param {number} r - Red component
 * @param {number} g - Green component
 * @param {number} b - Blue component
 * @returns {number} - Approximate color temperature value (Kelvin)
 */
export const calculateColorTemperature = (r, g, b) => {
  // Convert RGB to xy chromaticity coordinates
  const X = 0.4124 * r + 0.3576 * g + 0.1805 * b;
  const Y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const Z = 0.0193 * r + 0.1192 * g + 0.9505 * b;
  
  const x = X / (X + Y + Z) || 0;
  const y = Y / (X + Y + Z) || 0;
  
  // Use McCamy's formula to calculate CCT (Correlated Color Temperature)
  // Reference: McCamy, Calvin S. (April 1992).
  // "Correlated color temperature as an explicit function of chromaticity coordinates"
  const n = (x - 0.3320) / (0.1858 - y);
  
  // Use cubic polynomial fit to calculate CCT
  const CCT = 449 * Math.pow(n, 3) + 3525 * Math.pow(n, 2) + 6823.3 * n + 5520.33;
  
  return Math.max(1000, Math.min(Math.round(CCT), 15000));
};

/**
 * Get visual color representation based on color temperature
 * @param {number} temp - Color temperature value
 * @returns {Object} - Object containing hex and CSS color representations
 */
export const getVisualTemperatureColor = (temp) => {
  // Map color temperature range to visual colors
  let r, g, b;
  
  // Map colors based on temperature range
  temp = Math.max(1000, Math.min(temp, 15000)) / 100;
  
  // Simplified model for calculating RGB values based on color temperature
  if (temp <= 66) {
    r = 255;
    g = temp;
    g = 99.4708025861 * Math.log(g) - 161.1195681661;
    g = Math.min(255, Math.max(0, g));
    
    if (temp <= 19) {
      b = 0;
    } else {
      b = temp - 10;
      b = 138.5177312231 * Math.log(b) - 305.0447927307;
      b = Math.min(255, Math.max(0, b));
    }
  } else {
    r = temp - 60;
    r = 329.698727446 * Math.pow(r, -0.1332047592);
    r = Math.min(255, Math.max(0, r));
    
    g = temp - 60;
    g = 288.1221695283 * Math.pow(g, -0.0755148492);
    g = Math.min(255, Math.max(0, g));
    
    b = 255;
  }
  
  const hexColor = `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
  
  return {
    r: Math.round(r),
    g: Math.round(g),
    b: Math.round(b),
    hexColor,
    cssColor: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
  };
};

/**
 * Provide camera setting suggestions based on color temperature
 * @param {number} temperature - Color temperature value
 * @returns {Object} - Camera setting suggestions
 */
export const getCameraSettingSuggestion = (temperature) => {
  // Provide camera setting suggestions based on temperature range
  if (temperature < 2000) {
    return {
      whiteBalance: "Manual Mode",
      kelvinSetting: "1500-2000K",
      preset: "Candlelight",
      description: "Very warm light, very close to candlelight or firelight. Set white balance to the lowest possible value."
    };
  } else if (temperature >= 2000 && temperature < 3000) {
    return {
      whiteBalance: "Tungsten",
      kelvinSetting: "2500-3000K",
      preset: "Tungsten or Incandescent",
      description: "Warm-toned light, typical indoor lighting. Use tungsten or incandescent preset."
    };
  } else if (temperature >= 3000 && temperature < 4000) {
    return {
      whiteBalance: "Sunrise/Sunset",
      kelvinSetting: "3000-4000K",
      preset: "Sunrise/Sunset",
      description: "Warm light, similar to natural light during sunrise or sunset. Use sunrise/sunset preset."
    };
  } else if (temperature >= 4000 && temperature < 5000) {
    return {
      whiteBalance: "Fluorescent",
      kelvinSetting: "4000-5000K",
      preset: "Fluorescent or Warm White LED",
      description: "Neutral-warm light, typical fluorescent light source. Use fluorescent preset."
    };
  } else if (temperature >= 5000 && temperature < 6000) {
    return {
      whiteBalance: "Daylight",
      kelvinSetting: "5000-6000K",
      preset: "Daylight",
      description: "Neutral light, close to natural daylight at noon. Use daylight or auto white balance."
    };
  } else if (temperature >= 6000 && temperature < 7000) {
    return {
      whiteBalance: "Cloudy",
      kelvinSetting: "6000-7000K",
      preset: "Cloudy",
      description: "Slightly cool light, similar to natural light on a cloudy day. Use cloudy preset."
    };
  } else if (temperature >= 7000 && temperature < 8000) {
    return {
      whiteBalance: "Shade",
      kelvinSetting: "7000-8000K",
      preset: "Shade",
      description: "Cool-toned light, similar to shaded areas. Use shade preset."
    };
  } else {
    return {
      whiteBalance: "Shade or Manual Mode",
      kelvinSetting: ">8000K",
      preset: "Deep Shade or North-facing Light",
      description: "Very cool light, similar to deep shade or north-facing light. Use shade preset or manually set a high color temperature value."
    };
  }
};

/**
 * Analyze image and extract color temperature
 * @param {File} imageFile - Input image file
 * @returns {Promise<Object>} - Object containing color temperature analysis results and suggestions
 */
export const analyzeImageColorTemperature = async (imageFile) => {
  try {
    // Create image element
    const img = document.createElement('img');
    
    // Convert file to data URL
    const dataUrl = await fileToDataURL(imageFile);
    img.src = dataUrl;
    
    // Wait for image to load
    await new Promise(resolve => {
      img.onload = resolve;
    });
    
    // Get average color from image
    const { r, g, b, imageInfo } = getAverageColor(img);
    
    // Calculate color temperature
    const temperature = calculateColorTemperature(r, g, b);
    
    // Get visual display color
    const visualColor = getVisualTemperatureColor(temperature);
    
    // Get camera setting suggestions
    const suggestion = getCameraSettingSuggestion(temperature);
    
    // Return analysis results
    return {
      temperature,
      rgb: { r, g, b },
      visualColor,
      suggestion,
      imageInfo
    };
  } catch (error) {
    console.error('Image analysis error:', error);
    throw new Error('Unable to analyze image color temperature. ' + error.message);
  }
} 