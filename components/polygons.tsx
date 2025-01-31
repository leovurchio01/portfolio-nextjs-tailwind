// Polygons.jsx

import React from 'react';
import styles from '@/style.module.css'; // Import your CSS file

export default function Polygons() {
  const getRandomDelay = () => Math.random() * 5 + 1; // Adjust the range as needed

  const getRandomClipPath = () => {
    // Define an array of clipPath strings
    const clipPaths = [
      "polygon( 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%,74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      "polygon(97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 60.2% 62.4%, 52.4% 68.1%, 72.5% 32.5%, 74.1% 44.1%, 100% 61.6%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      "polygon(50% 0%, 60.2% 62.4%, 52.4% 68.1%, 72.5% 32.5%, 74.1% 44.1%)",
      "polygon( 80.7% 2%, 60.2% 62.4%, 52.4% 68.1%, 72.5% 32.5%, 74.1% 44.1%,0% 0%, 100% 0% 72.5% 32.5%, 74.1% 44.1%, 100% 61.6%,, 50% 100%)",
      "polygon( 100% 61.6%,74.1% 44.1%, 100% 61.6%, 0% 20%)",
      "polygon( 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%,30% 0%, 100% 60%, 80.7% 2%, 60.2% 62.4%, 52.4% 68.1%, 72.5% 32.5%, 74.1% 44.1%, 70% 100%, 0% 40%)",
      "polygon(99.9% 19.3%, 14.5% 97.8%, 27.5% 67.5%, 39.8% 37.6%, 47.6% 31.9%, 52.5% 41.7%, 54.8% 65.5%, 72.5% 23.3%, 99.9% 35.1%, 82.1% 0%, 72.4% 23.2%, 23.9% 2.3%, 0.1% 35.1%, 0.1% 0%, 100% 0.1%, 72.4% 23.2%, 14.5% 2.3%, 99.9% 80.1%, 72.4% 2.3%, 23.9% 23.2%, 0.1% 2.3%, 0.1% 80.1%, 23.9% 97.7%, 74.4% 76.8%, 75.9% 5.9%)",
      "polygon(2.5% 73.1%, 14.5% 99.9%, 19.3% 80.1%, 39.8% 37.6%, 47.6% 31.9%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 0.1%, 27.6% 76.8%, 76.1% 2.3%, 85.5% 99.9%, 99.9% 64.9%, 99.9% 100%, 0.1% 99.9%, 19.3% 2.3%, 0.1% 35.1%, 72.4% 97.7%, 99.9% 35.1%, 82.1% 100%, 72.4% 76.8%, 23.9% 23.2%, 0.1% 76.8%, 99.9% 0.1%, 75.9% 94.1%, 74.4% 23.2%)",
      "polygon(50% 100%, 39.8% 37.6%, 47.6% 31.9%, 27.5% 76.7%, 99.9% 64.9%, 99.9% 100%)",
      "polygon(19.3% 80.1%, 39.8% 37.6%, 47.6% 31.9%, 27.5% 76.7%, 0.1% 0%, 100% 0%, 72.4% 23.2%, 14.5% 97.7%, 99.9% 64.9%, 99.9% 100%, 50% 0%)",
      "polygon(0% 99.9%, 25.9% 55.9%, 0% 100%, 100% 79.9%)",
      "polygon(70% 0%, 0.1% 35.1%, 19.3% 99.9%, 0.1% 60%, 19.3% 2.3%, 39.8% 37.6%, 47.6% 31.9%, 27.5% 76.7%, 72.4% 97.7%, 0.1% 0%, 75.9% 60%)"
    ];

    // Randomly select a clipPath
    const randomClipPath = clipPaths[Math.floor(Math.random() * clipPaths.length)];

    return randomClipPath;
  };

  return (
    
  
      <div className="md:max-w-3xl mx-auto md:mt-12 relative ">
        {[1, 2, 3, 4].map((index) => (
          <div
          key={index}
          aria-hidden="true"
          className={`absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden ${styles.animatePolygon}`}
          style={{
            animationDelay: `${getRandomDelay()}s`,
            clipPath: getRandomClipPath(),
          }}
        >
          <div
            className={`relative left-[${10 + index * 5}%]  aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2d6cb0] to-[#89fcef] opacity-40 lg:w-[130.1875rem] ${styles.growShrink}`}
          />
        </div>
        ))}
     
    </div>
    
  );
}


