import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#a9c9c2"
    foregroundColor="#59aec3">
    <circle cx="141" cy="130" r="120" />
    <rect x="15" y="299" rx="10" ry="10" width="250" height="85" />
    <rect x="20" y="399" rx="10" ry="10" width="75" height="30" />
    <rect x="120" y="392" rx="30" ry="30" width="138" height="44" />
    <rect x="15" y="265" rx="10" ry="10" width="250" height="25" />
  </ContentLoader>
);

export default Skeleton;
