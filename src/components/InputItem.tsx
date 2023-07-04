import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { validateInput } from '../helpers/validateInput';
import { normalizeLabel } from '../helpers/normalizeLabel';

type Props = {
  label: string;
  value: string;
  strict: boolean;
  changeInput: (stateKey: string, value: string) => void;
  isWarning: boolean;
};

const InputItem: React.FC<Props> = React.memo(({
  label,
  value,
  strict,
  changeInput,
  isWarning,
}) => {
  const isInputValid = !validateInput(value);

  const fieldColor = isInputValid ? 'primary' : 'warning';

  const labelInfo = isInputValid
    ? normalizeLabel(label)
    : 'Warning! Invalid character';

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeInput(label, event.target.value);
  };

  return (
    <Box>
      <TextField
        color={fieldColor}
        variant="outlined"
        size="small"
        label={labelInfo}
        value={value}
        disabled={isWarning || strict}
        onChange={handleInputChange}
      />
    </Box>
  );
});

export default InputItem;
