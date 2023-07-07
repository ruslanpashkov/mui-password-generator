import Box from '@mui/material/Box';
import { FC, memo } from 'react';
import { Checkboxes } from '../types/Checkboxes';
import { Fields } from '../types/Fields';
import CheckboxOptions from './CheckboxOptions';
import InputFields from './InputFields';

type Props = {
  fields: Fields;
  checkboxes: Checkboxes;
  changePasswordLength: (value: number | number[]) => void;
  changeInputValue: (stateKey: string, value: string) => void;
  changeCheckboxStatus: (checkboxName: keyof Checkboxes) => void;
  hasActiveCheckbox: boolean;
};

const PasswordOptions: FC<Props> = memo(({
  fields,
  checkboxes,
  changePasswordLength,
  changeInputValue,
  changeCheckboxStatus,
  hasActiveCheckbox,
}) => (
  <Box
    sx={{
      height: '200px',
      display: 'flex',
      justifyContent: 'space-around',
    }}
  >
    <CheckboxOptions
      checkboxes={checkboxes}
      changeStatus={changeCheckboxStatus}
    />

    <InputFields
      fields={fields}
      length={checkboxes.length}
      strict={checkboxes.strict}
      changeLength={changePasswordLength}
      changeInput={changeInputValue}
      changeStatus={changeCheckboxStatus}
      isWarning={!hasActiveCheckbox}
    />
  </Box>
));

export default PasswordOptions;
