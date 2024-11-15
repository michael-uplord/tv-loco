import React from 'react';

const Svg = ({ name, width, height, className, color }) => {
  const SvgIcon = React.lazy(() => import(`../../assets/${name}.svg`));

  return (
    <React.Suspense>
      <SvgIcon
        width={width}
        height={height}
        className={className}
        color={color}
      />
    </React.Suspense>
  );
};

export default Svg;