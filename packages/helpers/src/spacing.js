import stripUnit from './strip-unit'

const spacing = (value = 1) => props => {
  const [factor, unit] = stripUnit(props.theme.spacing || '0.5rem', true);


  return (Math.round((factor * value) / 0.5) * 0.5) + unit;
};

export default spacing;
