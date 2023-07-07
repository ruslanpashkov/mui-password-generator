import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FC, memo } from 'react';
import { normalizeLabel } from '../helpers/normalizeLabel';
import { Checkboxes } from '../types/Checkboxes';

type Props = {
  checkbox: string;
  status: boolean;
  changeStatus: (checkboxName: keyof Checkboxes) => void;
};

const CheckboxItem: FC<Props> = memo(({
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
