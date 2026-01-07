// Entry point for Beams component
// This will be bundled with esbuild

import ReactDefault from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

// Make React available in the module scope for JSX transformation
const React = ReactDefault;

// Make React available globally as well
if (typeof window !== 'undefined') {
  window.React = React;
}

// Import Beams component
import Beams from './Beams';

// Beams component wrapper
function BeamsWrapper(props) {
  return React.createElement('div', {
    style: { width: '100%', height: '600px', position: 'relative' }
  }, React.createElement(Canvas, {
    camera: { position: [0, 0, 5] },
    style: { width: '100%', height: '100%' }
  }, React.createElement(Beams, props)));
}

// Initialize when DOM is ready
(function initBeams() {
  function init() {
    // Find or create container
    let beamsContainer = document.getElementById('beams-container');
    if (!beamsContainer) {
      // Try to find a container with class
      const container = document.querySelector('.beams-wrapper');
      if (container) {
        beamsContainer = container;
        beamsContainer.id = 'beams-container';
      } else {
        // Create a default container
        beamsContainer = document.createElement('div');
        beamsContainer.id = 'beams-container';
        beamsContainer.className = 'beams-wrapper';
        document.body.appendChild(beamsContainer);
      }
    }
    
    try {
      console.log('Initializing Beams...');
      // Create root and render Beams
      const root = ReactDOM.createRoot(beamsContainer);
      root.render(React.createElement(BeamsWrapper, {
        beamWidth: 2.6,
        beamHeight: 20,
        beamNumber: 21,
        lightColor: "#00b3ff",
        speed: 3.2,
        noiseIntensity: 2.05,
        rotation: 52
      }));
      console.log('✅ Beams initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing Beams:', error);
      setTimeout(init, 200);
    }
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 200);
  }
})();

