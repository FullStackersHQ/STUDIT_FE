import React from 'react';
import animationData from '../assets/lottie/spinner.json';
import Lottie from 'lottie-react';

function LoadingScreen() {
  return (
    <div className="w-hull relative h-screen bg-white">
      <Lottie
        animationData={animationData}
        className="absolute top-1/2 left-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export default React.memo(LoadingScreen);
