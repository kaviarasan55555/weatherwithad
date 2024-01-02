// ExampleAd.js
import React, { useEffect } from 'react';

const ExampleAd = () => {
  useEffect(() => {
    // Include ad platform script here
    const script = document.createElement('script');
    script.src = 'https://www.toprevenuegate.com/uf9v3zcef?key=3f638e12fa5ad2bcb3171daef05c1c6a';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Placeholder for the ad */}
    </div>
  );
};

export default ExampleAd;
