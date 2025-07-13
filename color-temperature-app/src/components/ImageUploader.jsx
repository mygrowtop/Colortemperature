import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import cameraIcon from '../assets/camera-icon.svg';

const ImageUploader = ({ onImageUploaded, isAnalyzing }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // Handle rejected files
    if (rejectedFiles && rejectedFiles.length > 0) {
      setError('Please upload a valid image file (JPEG, PNG, WebP, GIF)');
      return;
    }

    const file = acceptedFiles[0];
    if (!file) return;

    // Create preview URL
    const fileUrl = URL.createObjectURL(file);
    setPreviewUrl(fileUrl);
    setError(null);

    // Call parent component callback
    onImageUploaded(file);

    // Use FileReader as a backup
    const reader = new FileReader();
    reader.onload = () => {
      // Additional processing if needed
    };
    reader.onerror = () => {
      setError('Error reading the file');
    };
    reader.readAsDataURL(file);
  }, [onImageUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1,
    disabled: isAnalyzing
  });

  // Clean up preview URL to prevent memory leaks
  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="image-uploader">
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'active' : ''} ${previewUrl ? 'has-preview' : ''}`}
        style={{ flex: previewUrl ? '1' : '2' }}
      >
        <input {...getInputProps()} />
        
        <div className="dropzone-content" style={{ textAlign: 'center' }}>
          <div className="upload-icon" style={{ margin: '0 auto 15px auto', width: '60px', height: '60px' }}>
            <img 
              src={cameraIcon} 
              alt="Camera" 
              style={{ 
                width: '100%', 
                height: '100%', 
                color: isDragActive ? '#f97316' : '#2563eb' 
              }} 
            />
          </div>
          <div className="dropzone-text">
            <h3>{isDragActive ? 'Drop the image here' : 'Upload Your Photo'}</h3>
            <p>
              {isDragActive 
                ? 'We\'ll analyze it instantly' 
                : previewUrl 
                  ? 'Click or drag to upload a different image' 
                  : 'Drag & drop your image here, or click to select a file'}
            </p>
            {!previewUrl && <p className="file-types">JPEG, PNG, WebP, GIF</p>}
          </div>
        </div>
      </div>

      {previewUrl && (
        <div className="image-preview" style={{ flex: '1' }}>
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="preview-image" 
          />
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ImageUploader; 