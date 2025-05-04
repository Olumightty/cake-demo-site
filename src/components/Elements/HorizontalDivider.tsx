import React from 'react';

const HorizontalDivider = () => {
  return (
    <div className="flex w-[100px] h-1 my-4">
      <div className="flex-grow bg-gray-200"></div>
      <div className="w-1/6 bg-(--alternate-color)"></div>
    </div>
  );
};

export default HorizontalDivider;