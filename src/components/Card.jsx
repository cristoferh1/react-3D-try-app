import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";

export function Card({ currentFace }) {
  const ref = useRef();
  const faceInfo = {
    1: {
      title:
        "Adipisicing ea consectetur occaecat esse nulla dolor consequat dolor cillum commodo sit. Veniam exercitati",
    },
    2: {
      title:
        "Aliqua consectetur deserunt voluptate nisi amet culpa sit adipisicing ad aliqua et qui duis est. Excepteur quis fugiat consectetur commo",
    },
    3: {
      title: "Ad culpa irure culpa eu cillum laboris ut dolore id et adi",
    },
    4: {
      title:
        "Amet eu pariatur irure sint et labore cupidatat culpa ullamco occaecat esse. Adipisicing ex mollit nulla aliqui",
    },
  };

  const info = faceInfo[currentFace];

  useEffect(() => {
    if (info && ref.current) {
      const titleSplit = new SplitText("#title", {
        type: "words, lines",
        mask: "lines",
      });
      gsap.from(titleSplit.words, {
        yPercent: -100,
        opacity: 0,
        duration: 0.2,
        ease: "back",
        stagger: 0.03,
        rotation: "random(-90, 90)",
      });
    }
  }, [currentFace, info]);
  if (!info) return null;
  return (
    <div
      ref={ref}
      className="fixed top-80 right-10 p-6 h-40 w-96 bg-gray-400/0 rounded-lg bg-auto"
    >
      <h3 id="title" className="text-[#fbffff] text-5xl font-extrabold">
        {info.title}
      </h3>
    </div>
  );
}
