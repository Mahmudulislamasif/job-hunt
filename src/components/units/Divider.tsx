import React from 'react';

const Divider = () => {
    return (
    <div className="flex gap-1 my-3 mx-auto">
        <div className="w-[10px] h-[2px] bg-secondary"></div>
        <div className="w-[30px] h-[2px] bg-secondary"></div>
      </div>
    );
};

export default Divider;