import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import CheckboxItem from './CheckboxItem';
import { Checkboxes } from '../types/Checkboxes';

type Props = {
  checkboxes: Checkboxes;
  changeStatus: (checkboxName: keyof Checkboxes) => void;
};

const CheckboxOptions: React.FC<Props> = React.memo(({
  checkboxes,
  changeStatus,
}) => (
  <FormGroup sx={{ justifyContent: 'space-between' }}>
    {Object.entries(checkboxes).slice(1, -1).map(([key, value]) => (
      <CheckboxItem
        key={key}
        checkbox={key}
        status={value}
        changeStatus={changeStatus}
      />
    ))}
  </FormGroup>
));

export default CheckboxOptions;
