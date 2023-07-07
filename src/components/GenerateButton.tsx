import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

type Props = {
  generatePassword: () => void;
  hasActiveCheckbox: boolean;
};

const GenerateButton: FC<Props> = memo(({
  generatePassword,
  hasActiveCheckbox,
}) => (
  <Button
    color="primary"
    variant="contained"
    aria-label="Generate password"
    disabled={!hasActiveCheckbox}
    onClick={generatePassword}
  >
    <Typography variant="button" sx={{ fontWeight: 700 }}>
      Generate
    </Typography>
  </Button>
));

export default GenerateButton;
