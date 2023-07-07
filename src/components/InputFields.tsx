import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { FC, memo } from 'react';
import { Checkboxes } from '../types/Checkboxes';
import { Fields } from '../types/Fields';
import InputItem from './InputItem';

type Props = {
  fields: Fields;
  length: number;
  strict: boolean;
  changeLength: (value: number | number[]) => void;
  changeInput: (stateKey: string, value: string) => void;
  changeStatus: (checkboxName: keyof Checkboxes) => void;
  isWarning: boolean;
};

const InputFields: FC<Props> = memo(({
  fields,
  length,
  strict,
  changeLength,
  changeInput,
  changeStatus,
  isWarning,
}) => {
  const handleStrictModeClick = () => {
    if (!strict && length === 1) {
      changeLength(4);
    }

    changeStatus('strict' as keyof Checkboxes);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {Object.entries(fields).map(([key, value]) => (
        <InputItem
          key={key}
          label={key}
          value={value}
          strict={strict}
          changeInput={changeInput}
          isWarning={isWarning}
        />
      ))}

      <FormControlLabel
        control={
          <Switch
            checked={strict}
            disabled={isWarning}
            onClick={handleStrictModeClick}
          />
        } label={'Strict mode'}
      />
    </Box>
  );
});

export default InputFields;
