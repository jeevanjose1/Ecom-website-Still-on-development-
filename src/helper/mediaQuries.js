//media queries

const breakpoints = {
  small: 640,
  medium: 768,
  large: 1024,
  xlarge: 1280,
  xxlarge: 1440,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
export const mediaQueriesMin = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
