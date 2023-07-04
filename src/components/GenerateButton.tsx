import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  generatePassword: () => void;
  hasActiveCheckbox: boolean;
};

const GenerateButton: React.FC<Props> = React.memo(({
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
