import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollMouse = () => {
  const gifContainerRef = useRef(null);

  useEffect(() => {
    if (gifContainerRef.current) {
      gsap.set(gifContainerRef.current, { opacity: 1, y: 0 });

      const timer = setTimeout(() => {
        gsap.to(gifContainerRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        });
      },25000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div
      ref={gifContainerRef}
      className="fixed bottom-8 flex justify-start w-full"
    >
      <img src="./scroll.gif" alt="scroll" className="w-28 h-auto" />
    </div>
  );
};

export default ScrollMouse;
