import React from 'react';
import animationData from '../assets/lottie/spinner.json';
import Lottie from 'lottie-react';

function LoadingScreen() {
  return (
    <div className="w-hull bg-white-gray relative h-screen">
      <Lottie
        animationData={animationData}
        className="absolute top-1/2 left-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export default React.memo(LoadingScreen);
