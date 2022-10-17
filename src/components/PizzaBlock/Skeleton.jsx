import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={459}
      viewBox="0 0 280 462"
      backgroundColor="#a9c9c2"
      foregroundColor="#59aec3">
      <circle cx="141" cy="130" r="130" />
      <rect x="15" y="275" rx="10" ry="10" width="250" height="25" />
      <rect x="10" y="320" rx="10" ry="10" width="260" height="85" />
      <rect x="18" y="425" rx="10" ry="10" width="80" height="35" />
      <rect x="132" y="415" rx="25" ry="25" width="140" height="48" />
    </ContentLoader>
  </div>
);

export default Skeleton;
