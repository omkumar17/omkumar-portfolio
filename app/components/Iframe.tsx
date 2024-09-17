import React from 'react';

const Iframe: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7235670575522713600"
        height="1008"
        width="504"
        frameBorder="0"
        allowFullScreen
        title="Embedded post"
      ></iframe>
    </div>
  );
};

export default Iframe;
