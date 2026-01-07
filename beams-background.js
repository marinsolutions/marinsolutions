// Entry point for Beams background
// This will be bundled with esbuild

import ReactDefault from 'react';
import ReactDOM from 'react-dom/client';

// Make React available in the module scope for JSX transformation
// This ensures React.createElement calls work in the bundled code
const React = ReactDefault;

// Make React available globally as well
if (typeof window !== 'undefined') {
  window.React = React;
}

// Import Beams component (it already includes Canvas)
import Beams from './Beams';

// Beams background component - fill container for desktop
function BeamsBackground() {
  return React.createElement('div', {
    style: { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, minHeight: '100vh' }
  }, React.createElement(Beams, {
    beamWidth: 2.6,
    beamHeight: 20,
    beamNumber: 21,
    lightColor: "#00b3ff",
    speed: 3.2,
    noiseIntensity: 2.05,
    scale: 0.2,
    rotation: 52
  }));
}

// Initialize when DOM is ready - this will execute when bundle loads
(function initBeamsBackground() {
  function init() {
    const container = document.getElementById('beams-background');
    if (!container) {
      console.log('Waiting for beams-background container...');
      setTimeout(init, 100);
      return;
    }
    
    // React and ReactDOM are imported at the top, so they're available in the bundle
    try {
      console.log('Initializing Beams background...');
      const root = ReactDOM.createRoot(container);
      root.render(React.createElement(BeamsBackground));
      console.log('✅ Beams background initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing Beams background:', error);
      // Fallback: try again after a short delay
      setTimeout(init, 200);
    }
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded, wait a bit for everything to be ready
    setTimeout(init, 200);
  }
})();

