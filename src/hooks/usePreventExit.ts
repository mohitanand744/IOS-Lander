import { useEffect } from 'react';

export const usePreventExit = (message = "Are you sure you want to leave?") => {
  useEffect(() => {
    // 1. Prevent closing the tab/window
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      // Required for Chrome/Edge/Firefox
      e.returnValue = message;
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Mouse leave detection for custom alert
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // User moved mouse out of the top of the viewport (likely to close tab)
        // We can't actually BLOCK close here unless we use confirm/alert which blocks thread
        window.alert(message);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);


    // 2. Trapping the "Back" button using History API (Aggressive)
    const pushState = () => {
      window.history.pushState({ page: 'locked' }, "", window.location.href);
    };

    // Push initial state
    pushState();
    pushState(); // Push twice to create a buffer

    const handlePopState = (_event: PopStateEvent) => {
      // "Trap" the user by pushing state again when they try to go back
      pushState();
    };

    window.addEventListener("popstate", handlePopState);

    // 3. Reinforce the trap periodically and purely on interaction
    const interval = setInterval(() => {
      // Only push if we are not deep enough? Or just keep it fresh
      // Pushing too often might be blocked by some browsers, but let's try a gentle heartbeat
      // window.history.pushState(null, "", window.location.href); 
      // Instead of interval pushing which might annoy, let's rely on interaction
    }, 1000);

    // Aggressive push on any interaction to ensure history stack is full
    const handleInteraction = () => {
      pushState();
    };

    // Listen to extensive events to "warm up" the user interaction requirement
    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];
    events.forEach(event => window.addEventListener(event, handleInteraction, { capture: true, passive: true }));


    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
      events.forEach(event => window.removeEventListener(event, handleInteraction, { capture: true }));
      clearInterval(interval);
    };
  }, []);
};
