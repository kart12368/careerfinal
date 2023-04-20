import { Slider, Typography } from '@mui/material';

function Question({ category, info, value, onChange }) {
  return (
    <div className="px-[10rem]">
      <Typography gutterBottom>{category}</Typography>
      <Typography gutterBottom>{info}</Typography>
      <Slider
        value={value}
        onChange={onChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={100}
        required
      />
    </div>
  );
}

export default Question;
