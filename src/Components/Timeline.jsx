import React from 'react';

const Timeline = ({timelineData}) => {

  
const getPosition = (index) => {
    const positions = [
      { x: '1.3%', y: '106%' }, 
      { x: '50.1%', y: '92.6%' },
      { x: '52.3%', y: '3.5%' },
      { x: '98.5%', y: '32.2%' },
    ];

    return {
      left: positions[index].x,
      top: positions[index].y,
      transform: 'translate(-50%, -50%)',
    };
  };

  return (
    <div className="relative w-full max-w-full mx-auto p-6 mt-20 lg:mt-32">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1174 481"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          d="M11 467C11 467 99.1371 357.64 214.99 342.16C330.844 326.679 478.293 376.617 534.834 384.107C591.375 391.598 638.963 396.951 708.337 211.327C777.71 25.7026 774.63 -20.445 1159 13.0806"
          stroke="#88B7FD"
          strokeWidth="6"
          strokeDasharray="10 10"
        />

        <circle cx="15.5" cy="465.5" r="15.5" fill="#88B7FD" />
        <circle cx="588.5" cy="383.5" r="15.5" fill="#88B7FD" />
        <circle cx="778.5" cy="55.5" r="15.5" fill="#88B7FD" />
        <circle cx="1158.5" cy="15.5" r="15.5" fill="#88B7FD" />
      </svg>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="absolute flex items-center bg-white rounded-lg w-full max-w-64 lg:max-w-60 p-2 space-x-2 select-none"
            style={getPosition(index)}
          >
            <img src={item.img} alt="logo" />
            <div className="flex flex-col">
                <h1 className='font-bold text-sm lg:text-xs'>{item.label}</h1>
                <span className='text-xs lg:text-[9px]'>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Timeline;
