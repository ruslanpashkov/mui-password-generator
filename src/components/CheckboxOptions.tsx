import FormGroup from '@mui/material/FormGroup';
import { FC, memo } from 'react';
import { Checkboxes } from '../types/Checkboxes';
import CheckboxItem from './CheckboxItem';

type Props = {
  checkboxes: Checkboxes;
  changeStatus: (checkboxName: keyof Checkboxes) => void;
};

const CheckboxOptions: FC<Props> = memo(({
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
