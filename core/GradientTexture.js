import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';

function GradientTexture({
  stops,
  colors,
  size = 1024,
  ...props
}) {
  const canvas = React.useMemo(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 16;
    canvas.height = size;
    const gradient = context.createLinearGradient(0, 0, 0, size);
    let i = stops.length;

    while (i--) {
      gradient.addColorStop(stops[i], colors[i]);
    }

    context.fillStyle = gradient;
    context.fillRect(0, 0, 16, size);
    return canvas;
  }, [stops]);
  return /*#__PURE__*/React.createElement("texture", _extends({
    args: [canvas],
    attach: "map"
  }, props));
}

export { GradientTexture };
