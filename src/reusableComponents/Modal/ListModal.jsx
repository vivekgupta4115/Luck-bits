// GenericModal.js
import React from 'react';

const ListModal = ({ className, isOpen, data = [], renderItem }) => {
  if (!isOpen) return null;

  return (
    <div className={`bg-mainBg shadow-2xl px-2  ${data?.length > 0 ? "block" : "hidden"}  space-y-1`}>
      {
        data.map((item, index) => (
          <div key={renderItem?.key?.(item, index) || index} className={` ${className}`}>
            {renderItem?.content?.(item) || JSON.stringify(item)}
          </div>
        ))
      }
    </div>
  );
};
export default ListModal;
