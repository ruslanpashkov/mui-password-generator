import React from 'react';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

type Props = {
  clearHistory: () => void;
  hasPasswords: boolean;
};

const ClearHistoryButton: React.FC<Props> = React.memo(({
  clearHistory,
  hasPasswords,
}) => (
  <Button
    variant="text"
    color="inherit"
    disabled={!hasPasswords}
    onClick={clearHistory}
  >
    <Typography variant="button">
      Clear history
    </Typography>

    <DeleteIcon />
  </Button>
));

export default ClearHistoryButton;
