import React from 'react';
import { myLink } from '../../constants';

const SocialIcons = () => {
  return (
    <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-5 justify-start">
      {myLink.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <img src={link.image} alt={link.title} className="w-7 h-7" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
