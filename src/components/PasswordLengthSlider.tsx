import Slider from '@mui/material/Slider';
import { FC, memo } from 'react';

type Props = {
  length: number;
  strict: boolean;
  changeLength: (value: number | number[]) => void;
  hasActiveCheckbox: boolean;
};

const PasswordLengthSlider: FC<Props> = memo(({
  length,
  strict,
  changeLength,
  hasActiveCheckbox,
}) => {
  const lengthProps = strict
    ? { min: 4, max: 32 }
    : { min: 1, max: 50 };

  const handleLengthSliderChange = (event: Event) => {
    const { value } = event.target as HTMLInputElement;

    changeLength(Number(value));
  };

  return (
    <Slider
      {...lengthProps}
      color="primary"
      value={length}
      valueLabelDisplay="auto"
      aria-label="Password length"
      onChange={handleLengthSliderChange}
      disabled={!hasActiveCheckbox}
    />
  );
});

export default PasswordLengthSlider;
