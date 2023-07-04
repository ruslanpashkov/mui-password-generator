import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Checkboxes } from '../types/Checkboxes';
import { normalizeLabel } from '../helpers/normalizeLabel';

type Props = {
  checkbox: string;
  status: boolean;
  changeStatus: (checkboxName: keyof Checkboxes) => void;
};

const CheckboxItem: React.FC<Props> = React.memo(({
  checkbox,
  status,
  changeStatus,
}) => {
  const handleCheckboxClick = () => {
    changeStatus(checkbox as keyof Checkboxes);
  };

  return (
    <FormControlLabel
      label={normalizeLabel(checkbox)}
      control={(
        <Checkbox
          checked={status}
          onClick={handleCheckboxClick}
        />
      )}
    />
  );
});

export default CheckboxItem;
