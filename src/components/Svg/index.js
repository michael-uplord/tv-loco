import React, { Suspense } from 'react';

const Svg = ({ name, width = 20, height = 20, className = "", color = "" }) => {
  const SvgIcon = React.lazy(() => import(`../../assets/${name}.svg`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SvgIcon width={width} height={height} className={className} color={color} />
    </Suspense>
  );
};

export default Svg;
