import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

type Props = {
  clearHistory: () => void;
  hasPasswords: boolean;
};

const ClearHistoryButton: FC<Props> = memo(({
  clearHistory,
  hasPasswords,
}) => (
  <Button
    variant="text"
    color="inherit"
    aria-label="Clear history"
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
